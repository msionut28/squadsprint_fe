'use client'
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Logout = () => {
  const backendURL = process.env.BACKEND_URL;
  const router = useRouter();
  const { logout: authLogout } = useAuth();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.post(
          `${backendURL}/logout/`,
          { refresh_token: localStorage.getItem("refresh_token") },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            withCredentials: true,
          }
        );

        // Check the response status code and handle accordingly
        if (response.status === 205) {
          localStorage.clear();
          authLogout();
          delete axios.defaults.headers.common["Authorization"];
          router.push("/");
        } else {
          console.log("Unexpected status code:", response.status);
        }
      } catch (error) {
        console.log("Logout not working", error);
      }
    };

    logout();
  }, [authLogout]);

  return <div></div>;
};

export default Logout;
