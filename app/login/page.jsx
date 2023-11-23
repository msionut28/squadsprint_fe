'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const { login, user } = useAuth()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const backendURL = process.env.BACKEND_URL

  const submit = async (e) => {
    e.preventDefault();
    const userlogin = {
      username: username,
      password: password,
    };
    // Create the POST requuest
    const { data } = await axios.post(
      `${backendURL}/token/`,
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
    await login(data)
  };
  useEffect(() => {
    const redirect = async () =>{
      console.log(user);
      if (user) {
        console.log(user);
        router.push('/')
      }
    }
    if(user !== null){
      setTimeout(redirect, 200)
    }
  }, [user, router]);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              className="form-control mt-1"
              placeholder="Enter Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
