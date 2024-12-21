"use client";

import api from "@/lib/axiosConfig";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import MentorSection from "./MentorSection";
import MenteeSection from "./MenteeSection";

const ConnectionsSection = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users");
        // console.log(res.data);
        setUser(res.data.user);
      } catch (error) {
        // TODO: notification - could not fetch user. Try again later.
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="bg-slate-100 rounded-lg p-4 max-w-[500px] min-h-[500px]">
      {user ? (
        user.role === "mentor" ? (
          <MenteeSection />
        ) : (
          <MentorSection />
        )
      ) : (
        <div className="flex items-center justify-center min-h-[500px]">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};
export default ConnectionsSection;
