'use client'
import { useEffect } from "react";
import axios from "axios";
const Logout = () => {
  const backendURL=process.env.BACKEND_URL
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${backendURL}/logout/`,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          { headers: { "Content-Type": "application/json", "Authorization": `${localStorage.getItem("access_token")}` } },
          { withCredentials: true }
        );
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        window.location.href = "/login";
      } catch (e) {
        console.log("logout not working", e);
      }
    })();
  }, []);
  return <div></div>;
};

export default Logout