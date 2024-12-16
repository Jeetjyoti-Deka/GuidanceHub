import { MatchedMentor } from "@/lib/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { UserRound } from "lucide-react";

const MentorCard = ({ mentor }: { mentor: MatchedMentor }) => {
  return (
    <Card className="max-w-[260px]">
      <CardHeader className="flex flex-col items-center gap-y-1">
        <div className="flex items-center justify-center p-3 rounded-full bg-slate-200 w-fit">
          {mentor.image ? (
            <Image src={mentor.image} width={100} height={100} alt="user" />
          ) : (
            <UserRound className="w-8 h-8" />
          )}
        </div>
        <CardTitle>{mentor.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Matched Skills: {mentor.overlap_count}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
export default MentorCard;
