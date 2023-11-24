'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Loading from "../Loading/Loading";

const Members = () => {
  const backendURL=process.env.BACKEND_URL
  const [TeamsData, setTeamsData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendURL}/employees/`);
        setTeamsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
    console.log(TeamsData);
  }, [])
    

  return (
    <Card className="h-full">
      <CardTitle className="bg-white py-4">
        <span className="mb-0">Teams</span>
      </CardTitle>
      <CardContent>

      {TeamsData ? (<table className="w-full text-nowrap">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Role</th>
            <th className="py-2">Last Activity</th>

          </tr>
        </thead>
        <tbody>
          {TeamsData.map((item, index) => (
              <tr key={index}>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="bg-purple-500 rounded-full p-1">
                    <Image
                      src={item.profile_picture ? `${item.profile_picture}`: '/icons/white/profilepic.svg'}
                      width={18}
                      height={18} 
                      alt=""
                      className="w-8 h-8 rounded-full"
                      />
                  </div>
                  <div className="ms-3 leading-5">
                    <h5 className="mb-1">{item.username}</h5>
                    <p className="mb-0">{item.email}</p>
                  </div>
                </div>
              </td>
              {/* <td className="py-3">{item.role}</td> */}
              {/* <td className="py-3">{item.lastActivity}</td> */}
              <td className="py-3">
              </td>
            </tr>
          ))}
        </tbody>
      </table>):<Loading innertext={"Please 🐻 with us while we're getting the data from the dark side.."}/>}
          </CardContent>
    </Card>
  );
};

export default Members
