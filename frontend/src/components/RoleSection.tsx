"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import api from "@/lib/axiosConfig";
import { User } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RoleSection = ({ user }: { user: User | null }) => {
  const [userRole, setUserRole] = useState(user?.role);
  const router = useRouter();

  const setRole = async (role: string) => {
    // send request to set role for the user
    try {
      const res = await api.put("/users/role", { role });
      if (res.data.message === "Role set") {
        router.push("/profile");
      }
    } catch (error) {
      // TODO: toast notification something went wrong. Try logging again.
      router.push("/login");
    }
  };

  if (userRole === null) {
    return (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Select your role.</AlertDialogTitle>
            <AlertDialogDescription>
              Select whether you want to join Guidance Hub as a Mentee or a
              Mentor.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setRole("mentee")}>
              Mentee
            </AlertDialogAction>
            <AlertDialogAction onClick={() => setRole("mentor")}>
              Mentor
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  } else {
    return null;
  }
};
export default RoleSection;
