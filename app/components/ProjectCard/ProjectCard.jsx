"use client";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectCard = ({ title, icon, description, percentage }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        isHovered && "scale-110 transition duration-500 ease-in-out"
      }`}
    >
      <CardContent>
        <div className="flex justify-between items-center mb-3">
          <div>
            <h4 className="text-lg font-semibold">{title}</h4>
          </div>
          <div
            className={`transition duration-500 ease-in-out ${
              isHovered ? "bg-purple-500" : "bg-purple-200"
            } text-primary rounded-full p-2 mt-1`}
          >
            <Image src={icon} width={40} height={40} alt="icon" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl">{percentage}</h1>
          <p className="mb-0">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
