"use client";

import { useState, useEffect } from "react";
import { fetchProjectData } from "@/data/ProjectCardData";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Performance from "./components/Performance/Performance";
import Members from "./components/Members/Members";
import Loading from "./components/Loading/Loading";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const result = await fetchProjectData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromBackend();
  }, []);
  return (
    <div>
      {data ? (
        <div className="grid grid-rows-1 grid-cols-4 w-full mt-6 mx-auto gap-5 mb-10">
          <ProjectCard
            title="Groups"
            icon="/icons/white/groups.svg"
            percentage={data.groupsManaged.length}
            description="Groups Managed"
          />
          <ProjectCard
            title="Tasks"
            icon="/icons/white/task.svg"
            percentage={data.tasks.length}
            description="Active Tasks"
          />
          <ProjectCard
            title="Performance"
            icon="/icons/white/overview.svg"
            percentage="75"
            description="Needs Improvement"
          />
          <ProjectCard
            title="Employees"
            icon="/icons/white/groups.svg"
            percentage={data.employees.length}
            description="Active Members"
          />
        </div>
      ) : (
        <Loading
          innertext={
            "Please 🐻 with us while we're getting the data from the dark side.."
          }
        />
      )}
      <Performance />
      <Members />
    </div>
  );
}
