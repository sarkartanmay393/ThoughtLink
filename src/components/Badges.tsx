import { Badge } from "./ui/badge";

const StatusBadge = ({ statusCode = 1 }: { statusCode?: number }) => {
  switch (statusCode) {
    case 4:
      return <Badge variant='secondary'>4. Done</Badge>;
    case 3:
      return <Badge variant='secondary'>3. Working</Badge>;
    case 2:
      return <Badge variant='secondary'>2. Analysing</Badge>;
    default:
      return <Badge variant='secondary'>1. Idea</Badge>;
  }
};

export default StatusBadge;