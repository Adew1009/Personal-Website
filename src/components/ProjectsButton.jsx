import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProjectsButton() {
  return (
    <Button variant="ghost">
      {" "}
      <Link to="/project/" className="text-4xl">
        <b>My Projects</b>
      </Link>
    </Button>
  );
}
