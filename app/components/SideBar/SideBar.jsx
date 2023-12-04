"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function SideBar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const settingSidebar = () => {
    console.log(open);
    setOpen(!open)
  }
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60" : "w-40 "
        } flex flex-col h-screen p-3 bg-slate-700 shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">SquadSprint</h2>
            <button onClick={() => settingSidebar()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  href="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image
                  src='/icons/white/home.svg'
                  width={30}
                  height={30}
                  alt='home'/>
                  <span className="text-gray-100">Home</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  href="/groups"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image 
                  src='/icons/white/groups.svg'
                  width={30}
                  height={30}
                  alt='groups'
                  />
                  <span className="text-gray-100">Groups</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/calendar"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image
                  src='/icons/white/calendar.svg'
                  width={30}
                  height={30}
                  alt='calendar'/>
                  <span className="text-gray-100">Calendar</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/task"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image
                  src='/icons/white/task.svg'
                  width={30}
                  height={30}
                  alt='task'/>
                  <span className="text-gray-100">Tasks</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/stats"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image
                  src='/icons/white/overview.svg'
                  width={30}
                  height={30}
                  alt='overview'/>
                  <span className="text-gray-100">Overview</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/draw"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image
                  src='/icons/white/draw.svg'
                  width={30}
                  height={30}
                  alt='draw'/>
                  <span className="text-gray-100">Excalidraw</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/chats"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    viewBox="0 0 512 512"
                    fill="white"
                    height="2em"
                    width="2em"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                    />
                    <path
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                    />
                  </svg>
                  <span className="text-gray-100">Chats</span>
                </Link>
              </li>
              {user ? (
                <li className="rounded-sm">
                  <Link
                    href="/logout"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <Image
                    src='/icons/white/logout.svg'
                    width={30}
                    height={30}
                    alt='logout'/>
                    <span className="text-gray-100">Logout</span>
                  </Link>
                </li>
              ) : (
                <li className="rounded-sm">
                  <Link
                    href="/login"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <Image
                  src='/icons/white/login.svg'
                  width={30}
                  height={30}
                  alt='login'/>
                    <span className="text-gray-100">Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
