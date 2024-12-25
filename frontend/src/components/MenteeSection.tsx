"use client";

import api from "@/lib/axiosConfig";
import { ConnectionUser } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import UserImage from "./UserImage";
import { Badge } from "./ui/badge";
import { Check, Trash, X } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DataTable } from "@/app/profile/data-table";
import { MenteeColumns } from "@/app/profile/columns";

// this is the mentee section in the mentor profile page
const MenteeSection = () => {
  const [mentees, setMentees] = useState<ConnectionUser[] | null>(null);

  useEffect(() => {
    const fetchMentees = async () => {
      try {
        const res = await api.get("/requests/mentor");
        console.log(res.data);

        setMentees(res.data.requests);
      } catch (error) {
        // TODO: notification - could find connections. try again later
      }
    };

    fetchMentees();
  }, []);

  // return (
  //   <div className="flex flex-col gap-y-2">
  //     {mentors ? (
  //       mentors.length === 0 ? (
  //         <div className="flex items-center justify-center min-h-[500px]">
  //           <p className="max-w-[300px] text-center">
  //             No Connection Requests from Mentees
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
  if (mentees) {
    return <DataTable columns={MenteeColumns} data={mentees} />;
  } else {
    <div>Loading...</div>;
  }
};

// const ConnectionUserBar = ({
//   user,
//   setMentors,
// }: {
//   user: ConnectionUser;
//   setMentors: Dispatch<SetStateAction<ConnectionUser[] | null>>;
// }) => {
// const acceptConnectionRequest = async () => {
//   try {
//     const res = await api.put(
//       `/requests/accept?requestId=${user.request_id}`
//     );
//     //   console.log(res.data);
//     setMentors((prev) => {
//       if (prev !== null) {
//         return prev.map((item) => {
//           if (item.request_id === user.request_id) {
//             item.request_status = "accepted";
//           }
//           return item;
//         });
//       } else {
//         return prev;
//       }
//     });
//   } catch (error) {
//     // TODO: notification - could not delete request. try again later
//   }
// };
// const rejectConnectionRequest = async () => {
//   try {
//     const res = await api.put(
//       `/requests/reject?requestId=${user.request_id}`
//     );
//     //   console.log(res.data);
//     setMentors((prev) => {
//       if (prev !== null) {
//         return prev.map((item) => {
//           if (item.request_id === user.request_id) {
//             item.request_status = "rejected";
//           }
//           return item;
//         });
//       } else {
//         return prev;
//       }
//     });
//   } catch (error) {
//     // TODO: notification - could not delete request. try again later
//   }
// };
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
//         {user.request_status === "pending" ? (
//           <>
// <TooltipProvider delayDuration={100}>
//   <Tooltip>
//     <TooltipTrigger asChild>
//       <div
//         onClick={acceptConnectionRequest}
//         className="p-2 w-fit hover:bg-green-400 cursor-pointer rounded-full font-bold"
//       >
//         <Check className="w-5 h-5" />
//       </div>
//     </TooltipTrigger>
//     <TooltipContent>
//       <p>Accept Connection</p>
//     </TooltipContent>
//   </Tooltip>
// </TooltipProvider>
// <TooltipProvider delayDuration={100}>
//   <Tooltip>
//     <TooltipTrigger asChild>
//       <div
//         onClick={rejectConnectionRequest}
//         className="p-2 w-fit hover:bg-red-400 cursor-pointer rounded-full font-bold"
//       >
//         <X className="w-5 h-5" />
//       </div>
//     </TooltipTrigger>
//     <TooltipContent>
//       <p>Reject Connection</p>
//     </TooltipContent>
//   </Tooltip>
// </TooltipProvider>
//           </>
//         ) : (
//           <TooltipProvider delayDuration={100}>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <div
//                   onClick={() => {}} // TODO: delete connection from mentor side
//                   className="p-3 w-fit hover:bg-red-400 cursor-pointer rounded-full font-bold"
//                 >
//                   <Trash className="w-5 h-5" />
//                 </div>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Delete Connection</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         )}
//       </div>
//     </div>
//   );
// };

export default MenteeSection;
