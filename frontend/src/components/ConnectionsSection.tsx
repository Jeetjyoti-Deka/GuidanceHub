"use client";

import { User } from "@/lib/types";
import MenteeSection from "./MenteeSection";
import MentorSection from "./MentorSection";

const ConnectionsSection = ({ user }: { user: User | null }) => {
  return (
    <div className="mt-7">
      <h3 className="text-2xl font-semibold mb-2">Connections</h3>
      <div className="bg-slate-100 rounded-lg p-4 w-full min-h-[300px]">
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
    </div>
  );
};
export default ConnectionsSection;
