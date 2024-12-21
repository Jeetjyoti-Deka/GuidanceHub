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
        const res = await api.get(`/users/match?page=${page}&limit=${limit}`);
        setMentors(res.data.mentors);
      } catch (error) {
        // TODO: toast notification - not logged in.
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
          {/* TODO: Implement pagination from shadcn */}
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchedMentorsSection;
