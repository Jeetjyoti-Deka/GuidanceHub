"use client";

import { ConnectionUser } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Check, Menu, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import api from "@/lib/axiosConfig";
import { useRouter } from "next/navigation";
import { PopoverClose } from "@radix-ui/react-popover";

export const MentorColumns: ColumnDef<ConnectionUser>[] = [
  {
    accessorKey: "username",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "request_status",
    header: "Status",
  },
];

export const MenteeColumns: ColumnDef<ConnectionUser>[] = [
  {
    accessorKey: "username",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "request_status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      const acceptConnectionRequest = async () => {
        try {
          const res = await api.put(
            `/requests/accept?requestId=${user.request_id}`
          );
          //   console.log(res.data);
          //   setMentors((prev) => {
          //     if (prev !== null) {
          //       return prev.map((item) => {
          //         if (item.request_id === user.request_id) {
          //           item.request_status = "accepted";
          //         }
          //         return item;
          //       });
          //     } else {
          //       return prev;
          //     }
          //   });
        } catch (error) {
          // TODO: notification - could not delete request. try again later
        }
      };
      const rejectConnectionRequest = async () => {
        try {
          const res = await api.put(
            `/requests/reject?requestId=${user.request_id}`
          );
          //   console.log(res.data);
          //   setMentors((prev) => {
          //     if (prev !== null) {
          //       return prev.map((item) => {
          //         if (item.request_id === user.request_id) {
          //           item.request_status = "rejected";
          //         }
          //         return item;
          //       });
          //     } else {
          //       return prev;
          //     }
          //   });
        } catch (error) {
          // TODO: notification - could not delete request. try again later
        }
      };

      if (user.request_status === "pending") {
        return (
          <Popover>
            <PopoverTrigger>
              <Menu className="w-5 h-5" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverClose asChild>
                <div
                  onClick={acceptConnectionRequest}
                  className="flex items-center just-start gap-x-4 cursor-pointer hover:bg-green-300 rounded-md py-2 px-4"
                >
                  <Check className="w-5 h-5" />
                  <p>Accept Request</p>
                </div>
              </PopoverClose>
              <PopoverClose asChild>
                <div
                  onClick={rejectConnectionRequest}
                  className="flex items-center just-start gap-x-4 cursor-pointer hover:bg-red-300 rounded-md py-2 px-4"
                >
                  <X className="w-5 h-5" />
                  <p>Reject Request</p>
                </div>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        );
      } else {
        return null;
      }
    },
  },
];
