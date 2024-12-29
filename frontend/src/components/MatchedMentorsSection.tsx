"use client";

import api from "@/lib/axiosConfig";
import { MatchedMentor } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MentorCard from "./MentorCard";

const MatchedMentorsSection = () => {
  const [mentors, setMentors] = useState<MatchedMentor[] | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const router = useRouter();

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        console.log("API url: ", process.env.API_URL);

        const res = await api.get(`/users/match?page=${page}&limit=${limit}`);
        console.log(res);

        setMentors(res.data.mentors);
      } catch (error) {
        // TODO: toast notification - not logged in.
        console.log(error);

        if ((error as any)?.status === 401) {
          return router.push("/login");
        }
        // TODO: toast notification - something went wrong. try again later.

        router.push("/user-discovery"); // TODO: if not login then also this is moving to user-discovery fix that.
      }
    };
    fetchMentors();
  }, []);

  return (
    <div>
      {mentors === null ? (
        <div>Loading...</div>
      ) : mentors.length === 0 ? (
        <div>No Mentors Matched...</div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-center">
            Recommended Mentors based on your Skills
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-3">
            {/* TODO: Implement pagination from shadcn */}
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchedMentorsSection;
