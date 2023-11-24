import ProjectCard from "./components/ProjectCard/ProjectCard";
import Performance from "./components/Performance/Performance";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-4 w-full mt-6 mx-auto gap-5 mb-10">
        <ProjectCard
          title="Groups"
          icon="/icons/white/groups.svg"
          percentage="5"
          description="Groups Managed"
        />
        <ProjectCard
          title="Tasks"
          icon="/icons/white/task.svg"
          percentage="120"
          description="Tasks Assigned"
        />
        <ProjectCard
          title="Performance"
          icon="/icons/white/overview.svg"
          percentage="75"
          description="Needs Improvement"
        />
        <ProjectCard
          title="Groups"
          icon="/icons/white/groups.svg"
          percentage="18"
          description="Active Groups"
        />
      </div>
      <Performance />
    </div>
  );
}
