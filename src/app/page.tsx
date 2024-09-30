'use client';

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import IdeaTable from "~/components/idea-table";
import { SearchIcon, ChevronDownIcon } from "lucide-react";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ideas = [
    {
      id: "1",
      title: "Multiply Strings (LeetCode): An Out of the Box Solution in JavaScript | HackerNoon",
      description: "An Out of the Box Solution in JavaScript | HackerNoon",
      statusCode: 1,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "2",
      title: "Create new Node.js application with Express, TypeScript, Nodemon and ESLint - DEV Comm",
      description: "Create new Node.js application with Express, TypeScript, Nodemon and ESLint - DEV Comm",
      statusCode: 2,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "3",
      title: "Gitflow Workflow | Atlassian Git Tutorial",
      description: "Gitflow Workflow | Atlassian Git Tutorial",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "4",
      title: "LoopedIn - Keep Your Customers In The Loop",
      description: "LoopedIn - Keep Your Customers In The Loop",
      statusCode: 4,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "5",
      title: "How to Remove and Clean Sticky Keys on M1 Macbook Air Step by Step Repair (Very Detaile",
      description: "How to Remove and Clean Sticky Keys on M1 Macbook Air Step by Step Repair (Very Detaile",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "6",
      title: "3 cool open-source UI Frontend Components Libraries - DEV Community",
      description: "3 cool open-source UI Frontend Components Libraries - DEV Community",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "7",
      title: "Components - Aceternity UI",
      description: "Components - Aceternity UI",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "8",
      title: "Open Source Durable Execution | Temporal Technologies",
      description: "Open Source Durable Execution | Temporal Technologies",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "9",
      title: "Introduction · Reverse Engineering",
      description: "Introduction · Reverse Engineering",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "10",
      title: "Ollama",
      description: "Ollama",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "11",
      title: "exo-explore/exo: Run your own AI cluster at home with everyday devices",
      description: "exo-explore/exo: Run your own AI cluster at home with everyday devices",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "12",
      title: "How relevant are shutter actuation cycles? - Photo Review",
      description: "How relevant are shutter actuation cycles? - Photo Review",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "13",
      title: "KwaiVG/LivePortrait: Make one portrait alive!",
      description: "KwaiVG/LivePortrait: Make one portrait alive!",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "14",
      title: "szimek/sharedrop: Easy P2P file transfer powered by WebRTC - inspired by Apple AirDrop",
      description: "szimek/sharedrop: Easy P2P file transfer powered by WebRTC - inspired by Apple AirDrop",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "15",
      title: "Multiply Strings (LeetCode): An Out of the Box Solution in JavaScript | HackerNoon",
      description: "An Out of the Box Solution in JavaScript | HackerNoon",
      statusCode: 1,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "16",
      title: "Create new Node.js application with Express, TypeScript, Nodemon and ESLint - DEV Comm",
      description: "Create new Node.js application with Express, TypeScript, Nodemon and ESLint - DEV Comm",
      statusCode: 2,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "17",
      title: "Gitflow Workflow | Atlassian Git Tutorial",
      description: "Gitflow Workflow | Atlassian Git Tutorial",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "18",
      title: "LoopedIn - Keep Your Customers In The Loop",
      description: "LoopedIn - Keep Your Customers In The Loop",
      statusCode: 4,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "19",
      title: "How to Remove and Clean Sticky Keys on M1 Macbook Air Step by Step Repair (Very Detaile",
      description: "How to Remove and Clean Sticky Keys on M1 Macbook Air Step by Step Repair (Very Detaile",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "20",
      title: "3 cool open-source UI Frontend Components Libraries - DEV Community",
      description: "3 cool open-source UI Frontend Components Libraries - DEV Community",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "21",
      title: "Components - Aceternity UI",
      description: "Components - Aceternity UI",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "22",
      title: "Open Source Durable Execution | Temporal Technologies",
      description: "Open Source Durable Execution | Temporal Technologies",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "23",
      title: "Introduction · Reverse Engineering",
      description: "Introduction · Reverse Engineering",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "24",
      title: "Ollama",
      description: "Ollama",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    },
    {
      id: "25",
      title: "exo-explore/exo: Run your own AI cluster at home with everyday devices",
      description: "exo-explore/exo: Run your own AI cluster at home with everyday devices",
      statusCode: 3,
      createdAt: "2023-03-01T00:00:00.000Z",
      updatedAt: "2023-03-01T00:00:00.000Z",
    }
  ];

  const formattedIdeas = useMemo(() => {
    return ideas.filter((idea) => idea.title.includes(searchTerm) || idea.description.includes(searchTerm));
  }, [ideas, searchTerm]);

  return (
    <main className="flex flex-col bg- gray-900 h-s creen">
      <div className="flex flex-col te xt-gray-300 overflow-hidden">
        <header className="flex items-center justify-end p-4 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            {/* <div className="relative">
              <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)}
                className="pl-8 bg-gray-800 border-gray-700"
              />
            </div> */}
            <Button variant='secondary'>New Idea</Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <IdeaTable ideas={formattedIdeas} />
        </main>
        {/* <footer className="p-4 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm text-gray-500">COUNT: {ideas.length}</span>
          <Button variant="ghost" size="sm" className="text-gray-300">
            Calculate
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          </Button>
        </footer> */}
      </div>
    </main>
  );
}
