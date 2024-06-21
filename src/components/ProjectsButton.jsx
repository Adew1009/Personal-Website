import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProjectsButton() {
  return (
    <Button variant="ghost">
      {" "}
      <Link to="/project/" className="text-4xl">
        <u>View My Projects</u>
      </Link>
    </Button>
  );
}
