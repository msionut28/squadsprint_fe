"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DynamicForm from "../components/Form/Form";

export default function TaskCreator() {
  const fieldNames = ["Title", "Description", "Name"];
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  function onSubmit(data) {
    console.log(data);
  }
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedGroup(e.target.value);
  };
  useEffect(() => {
    const fetchGroups = async () => {
      const backendURL=process.env.BACKEND_URL
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(`${backendURL}/groups/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data;
        setGroups(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroups();
  }, []);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add a new task and assign it to a group
            </DialogDescription>
          </DialogHeader>
          <DynamicForm
            fieldNames={fieldNames}
            onSubmit={onSubmit}
            selectBar={true}
            options={groups.map((group) => ({
              value: group.id,
              label: group.name,
            }))}
            onChange={handleSelectChange}
            selectLabel="Please assign the task to a group"
          />
          <DialogFooter>
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 SquadSprint. All rights reserved.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h1>{selectedGroup ? selectedGroup : "No Group Selected Yet!"}</h1>
    </>
  );
}
