"use client";

import api from "@/lib/axiosConfig";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import DetailsSection from "./DetailsSection";
import Skills from "./Skills";
import ConnectionsSection from "./ConnectionsSection";
import RoleSection from "./RoleSection";

const UserWrapper = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users");
        setUser(res.data.user);
      } catch (error) {
        // TODO: notification something went wrong. try again later
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="">
      <RoleSection user={user} />
      <DetailsSection user={user} />
      <Skills />
      <ConnectionsSection user={user} />
    </div>
  );
};
export default UserWrapper;
