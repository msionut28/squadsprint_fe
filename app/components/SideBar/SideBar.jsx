"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
export default function SideBar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-40" : "w-60 "
        } flex flex-col h-screen p-3 bg-slate-600 shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">SquadSprint</h2>
            <button onClick={() => setOpen(!open)}>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-gray-100">Home</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  href="/groups"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    className="feather feather-users"
                    fill="none"
                    height="24"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="text-gray-100">Groups</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/calendar"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    fill="white"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                  >
                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 004.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                    <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z" />
                  </svg>
                  <span className="text-gray-100">Calendar</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/task"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    height="2em"
                    width="2em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm1.5 4.5v-4h4v4h-4z"
                    />
                    <path d="M12.75 5.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm0 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm0 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm-2.97-2.53a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 2.97-2.97a.75.75 0 011.06 0z" />
                  </svg>
                  <span className="text-gray-100">Tasks</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/stats"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="white"
                    height="2em"
                    width="2em"
                  >
                    <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z" />
                  </svg>
                  <span className="text-gray-100">Overview</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/draw"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    viewBox="0 0 640 512"
                    fill="white"
                    height="2em"
                    width="2em"
                  >
                    <path d="M192 96c26.5 0 48-21.5 48-48S218.5 0 192 0s-48 21.5-48 48 21.5 48 48 48zm-8 384V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V192h136c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V64h192v192H384v-32h-64v48c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
                  </svg>
                  <span className="text-gray-100">Excalidraw</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/draw"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-gray-100">Logout</span>
                  </Link>
                </li>
              ) : (
                <li className="rounded-sm">
                  <Link
                    href="/login"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
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
