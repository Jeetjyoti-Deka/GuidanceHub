"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from "@/lib/axiosConfig";
import { User } from "@/lib/types";
import UserCard from "./UserCard";
import MatchedMentorsSection from "./MatchedMentorsSection";

const UserDiscoverySection = () => {
  const [skill, setSkill] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [searchedMentors, setSearchedMentors] = useState<User[] | null>(null);

  const searchMentors = async () => {
    try {
      const res = await api.get(
        `/users/search?skill=${skill}&page=${page}&limit=${limit}`
      );
      console.log(res.data);
      setSearchedMentors(res.data.mentors);
      setSkill("");
    } catch (error) {
      console.log(error);

      // TODO: toast notification - something went wrong
    }
  };

  return (
    <div>
      <div className="flex items-center gap-x-3 mb-4">
        <Input
          placeholder="Search Mentor through skills... Eg: React"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <Button onClick={searchMentors} variant={"secondary"}>
          Search
        </Button>
      </div>

      <div>
        {searchedMentors === null ? (
          <div>
            <MatchedMentorsSection />
          </div>
        ) : searchedMentors.length === 0 ? (
          <div>No mentors found</div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-3">
            {searchedMentors.map((mentor) => (
              <UserCard key={mentor.id} user={mentor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default UserDiscoverySection;
