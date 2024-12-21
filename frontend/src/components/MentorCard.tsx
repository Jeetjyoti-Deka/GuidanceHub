import { ConnectionRequest, MatchedMentor } from "@/lib/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { Button } from "./ui/button";
import api from "@/lib/axiosConfig";
import { useEffect, useState } from "react";
import UserImage from "./UserImage";

const MentorCard = ({ mentor }: { mentor: MatchedMentor }) => {
  const [connectionRequest, setConnectionRequest] =
    useState<ConnectionRequest | null>(null);

  useEffect(() => {
    const fetchRequest = async () => {
      const res = await api.get(`/requests?mentorId=${mentor.id}`);
      if (res.data.request) {
        setConnectionRequest(res.data.request);
      }
    };
    fetchRequest();
  }, []);

  const makeConnectionRequest = async () => {
    try {
      const res = await api.post("/requests", { mentorId: mentor.id });
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
    <Card className="max-w-[260px]">
      <CardHeader className="flex flex-col items-center gap-y-1">
        <div className="flex items-center justify-center p-3 rounded-full bg-slate-200 w-fit">
          <UserImage img={mentor.image} />
        </div>
        <CardTitle>{mentor.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Matched Skills: {mentor.overlap_count}</p>
      </CardContent>
      <CardFooter>
        {connectionRequest ? (
          <div>{connectionRequest.status}</div>
        ) : (
          <Button onClick={makeConnectionRequest}>Connect</Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default MentorCard;
