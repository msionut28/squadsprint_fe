"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const { login, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const backendURL = process.env.BACKEND_URL;

  const submit = async () => {
    const userlogin = {
      username: username,
      password: password,
    };
    console.log(userlogin);
    // Create the POST request
    const { data } = await axios.post(
      `${backendURL}/customtoken/`,
      userlogin,
      {
        headers: { "Content-Type": "application/json" },
      },
      {
        withCredentials: true,
      }
    );

    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    await login(data);
  };
  useEffect(() => {
    const redirect = async () => {
      if (user) {
        console.log("inside redirect", user);
        router.push("/");
      }
    };
    if (user !== null) {
      setTimeout(redirect, 200);
    }
  }, [user, router]);
  return (
    <div className="grid grid-cols-2 gap-1 w-screen h-screen bg-violet-50">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <form
          className="mx-auto border-2 rounded-2xl bg-purple-500 shadow opacity-75 hover:opacity-100 transition ease-in-out delay-150"
          onSubmit={handleSubmit(submit)}
        >
          <div className="p-5">
            <h3 className="text-white">Sign In</h3>
            <div className="form-group mt-3">
              <Label className="block text-sm font-medium text-white">
                Username
              </Label>
              <Input
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter Username"
                name="username"
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <Label className="block text-sm font-medium text-white">
                Password
              </Label>
              <Input
                name="password"
                type="password"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <Button
                type="submit"
                className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-1 flex flex-col justify-start items-start my-auto">
        <Image
          src="/vectors/login.png"
          width={400}
          height={400}
          alt="login vector"
        />
      </div>
    </div>
  );
}
