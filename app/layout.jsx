import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "../styles/global.css";
import "../lib/axios";
import SideBar from "./components/SideBar/SideBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SquadSprint",
  description: "Unleash Team Potential, One Task at a Time!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-screen overflow-hidden">
            <SideBar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
