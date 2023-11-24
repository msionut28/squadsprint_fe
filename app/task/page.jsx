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
import { useAuth } from "@/context/AuthContext";
import DynamicForm from "../components/Form/Form";
import { useRouter } from "next/navigation";

export default function TaskCreator() {
  const fieldNames = [
    { name: "title", label: "Title", type: "text", placeholder: "Enter Title" },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter Description",
    },
    {
      name: "deadline",
      label: "Deadline",
      type: "date",
      placeholder: "Pick a date",
    },
  ];
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const { user } = useAuth();
  const router = useRouter();
  const onSubmit = async (data) => {
    const backendURL = process.env.BACKEND_URL;
    try {
      const accessToken = localStorage.getItem("access_token");
      const userId = user ? user.user_id.toString() : null;
      const taskData = {
        ...data,
        created_by: userId,
        assigned_group: selectedGroup,
      };
      console.log(taskData);
      const response = await axios.post(`${backendURL}/addtask/`, taskData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      if (response.status === 201) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedGroup(e.target.value);
  };
  useEffect(() => {
    const fetchGroups = async () => {
      const backendURL = process.env.BACKEND_URL;
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(`${backendURL}/groups/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data;
        console.log(data);
        setGroups(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroups();
    console.log(groups);
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
