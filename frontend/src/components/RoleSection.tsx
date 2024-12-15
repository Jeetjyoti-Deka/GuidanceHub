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
import { useRouter } from "next/navigation";
import api from "@/lib/axiosConfig";
import { useEffect, useState } from "react";

const RoleSection = () => {
  const [userRole, setUserRole] = useState("");
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

  useEffect(() => {
    const getUserRole = async () => {
      // send request to set role for the user
      try {
        const res = await api.get("/users");
        // console.log(res.data);

        const role = res.data.user?.role;
        setUserRole(role);
      } catch (error) {
        // TODO: toast notification something went wrong. Try logging again.
        router.push("/login");
      }
    };
    getUserRole();
  }, []);

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
