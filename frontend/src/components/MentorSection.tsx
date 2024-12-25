"use client";

import api from "@/lib/axiosConfig";
import { ConnectionUser } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import UserImage from "./UserImage";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MentorColumns } from "@/app/profile/columns";
import { DataTable } from "@/app/profile/data-table";

// this is the mentor section in the mentee profile page
const MentorSection = () => {
  const [mentors, setMentors] = useState<ConnectionUser[] | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await api.get("/requests/mentee");
        // console.log(res.data);

        setMentors(res.data.requests);
      } catch (error) {
        // TODO: notification - could find connections. try again later
      }
    };

    fetchMentors();
  }, []);

  // return (
  //   <div className="flex flex-col gap-y-2">
  //     {mentors ? (
  //       mentors.length === 0 ? (
  //         <div className="flex items-center justify-center min-h-[500px]">
  //           <p className="max-w-[300px] text-center">
  //             No Connection Requests. Make New Connection Request to Mentors to
  //             see them here.
  //           </p>
  //         </div>
  //       ) : (
  //         mentors.map((mentor) => (
  //           <ConnectionUserBar
  //             key={mentor.id}
  //             user={mentor}
  //             setMentors={setMentors}
  //           />
  //         ))
  //       )
  //     ) : (
  //       <div className="flex items-center justify-center min-h-[500px]">
  //         Loading...
  //       </div>
  //     )}
  //   </div>
  // );

  if (mentors) {
    return <DataTable columns={MentorColumns} data={mentors} />;
  } else {
    return <div>Loading...</div>;
  }
};

// const ConnectionUserBar = ({
//   user,
//   setMentors,
// }: {
//   user: ConnectionUser;
//   setMentors: Dispatch<SetStateAction<ConnectionUser[] | null>>;
// }) => {
//   const deleteConnectionRequest = async () => {
//     try {
//       const res = await api.delete(`/requests?mentorId=${user.id}`);
//       //   console.log(res.data);
//       setMentors((prev) => {
//         if (prev !== null) {
//           return prev.filter((item) => item.id !== user.id);
//         } else {
//           return prev;
//         }
//       });
//     } catch (error) {
//       // TODO: notification - could not delete request. try again later
//     }
//   };
//   return (
//     <div className="flex items-center justify-start gap-x-2 border-2 hover:border-b-4 border-slate-500 hover:bg-slate-50 rounded-lg py-2 px-4 cursor-pointer">
//       <div className="flex w-fit items-center justify-center p-3 rounded-full bg-slate-50">
//         <UserImage img={user.image} />
//       </div>
//       <div className="grid grid-cols-2 w-full max-w-[500px] ml-4">
//         <div className="flex flex-col justify-between items-start gap-y-2">
//           <Badge className="bg-slate-400">{user.role}</Badge>
//           {user.username}
//         </div>
//         <div className="flex flex-col justify-between items-start gap-y-2 ml-3">
//           <Badge className="bg-slate-400">Status</Badge>
//           {user.request_status}
//         </div>
//       </div>
//       <div className="flex items-center justify-center">
//         <TooltipProvider delayDuration={100}>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <div
//                 onClick={deleteConnectionRequest}
//                 className="p-2 w-fit hover:bg-slate-500 cursor-pointer rounded-full font-bold group"
//               >
//                 <X className="w-5 h-5 group-hover:text-slate-300" />
//               </div>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Delete Connection</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </div>
//     </div>
//   );
// };

export default MentorSection;
