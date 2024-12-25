"use client";

import { ConnectionRequest, User } from "@/lib/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import api from "@/lib/axiosConfig";
import { Button } from "./ui/button";

const UserCard = ({ user }: { user: User }) => {
  const [connectionRequest, setConnectionRequest] =
    useState<ConnectionRequest | null>(null);

  useEffect(() => {
    const fetchRequest = async () => {
      const res = await api.get(`/requests?mentorId=${user.id}`);
      if (res.data.request) {
        setConnectionRequest(res.data.request);
      }
    };
    fetchRequest();
  }, []);

  const makeConnectionRequest = async () => {
    try {
      const res = await api.post("/requests", { mentorId: user.id });
      console.log(res.data);
      if (res.data.message === "success" && res.data.request) {
        setConnectionRequest(res.data.request);
      }
    } catch (error) {
      // TODO: notification something went wrong. try again later
      // console.log(error);
    }
  };
  return (
    <Card className="w-full max-w-[260px] justify-self-center">
      <CardHeader className="flex flex-col items-center gap-y-1">
        <div className="flex items-center justify-center p-3 rounded-full bg-slate-200 w-fit">
          {user.image ? (
            <Image src={user.image} width={100} height={100} alt="user" />
          ) : (
            <UserRound className="w-8 h-8" />
          )}
        </div>
        <CardTitle>{user.username}</CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-center">
        {connectionRequest ? (
          <div>{connectionRequest.status}</div>
        ) : (
          <Button variant={"secondary"} onClick={makeConnectionRequest}>
            Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default UserCard;
