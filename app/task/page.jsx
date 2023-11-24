"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
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
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Loading from "../components/Loading/Loading";
import DeleteDialog from "../components/DeleteDialog/DeleteDialog";


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
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { user } = useAuth();
  const router = useRouter();
  const backendURL = process.env.BACKEND_URL;
  
  const onSubmit = async (data) => {
    const accessToken = localStorage.getItem("access_token");
    try {
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
  const fetchTasks = async () => {
    const backendURL = process.env.BACKEND_URL;
    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await axios.get(`${backendURL}/tasks/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response.data;
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.delete(`${backendURL}/tasks/delete/${taskId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.status === 204) {
        router.push('/');
      } else {
        console.log(`Unexpected status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCardClick = (taskId) => {
    setTaskId(taskId)
    console.log(taskId);
    setShowDeleteModal(true)

  }

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setTaskId(null)
  }

  useEffect(() => {
    const fetchGroups = async () => {
      const backendURL = process.env.BACKEND_URL;
      const accessToken = localStorage.getItem("access_token");
      try {
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
    fetchTasks();
    console.log(groups);
  }, []);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add a new Task</Button>
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
      {tasks ? tasks.map((task) => (
        <div className="mx-auto mt-5 w-52" key={task.id} onClick={()=> handleCardClick(task.id)}>
          <ProjectCard
            title={task.title}
            description={task.description}
            percentage={task.deadline}
            icon="/icons/white/task.svg"
          />
        </div>
      )): <Loading innertext={"Please 🐻 with us while we're getting the data from the dark side.."}/>}
      <DeleteDialog
              showDeleteModal={showDeleteModal}
              setShowDeleteModal={setShowDeleteModal}
              handleDelete={handleDelete}
              handleCloseModal={handleCloseModal}/>
    </div>
  );
}
