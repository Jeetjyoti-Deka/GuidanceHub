"use client";

import { User } from "@/lib/types";
import { Label } from "./ui/label";
import UserImage from "./UserImage";
import { Input } from "./ui/input";

const DetailsSection = ({ user }: { user: User | null }) => {
  return (
    <div className="w-full min-h-[328px]">
      <h3 className="text-2xl font-semibold mb-2">Details</h3>
      <div className="bg-slate-100 px-8 py-3 rounded-lg min-h-[328px]">
        {user ? (
          <div className=" flex flex-col gap-y-3">
            <div>
              <Label>Profile Picture</Label>
              <UserImage img={user.image} />
            </div>
            <div>
              <Label>Name</Label>
              <UserDetailInput value={user.username} />
            </div>
            <div>
              <Label>Email</Label>
              <UserDetailInput value={user.email} />
            </div>
            <div>
              <Label>Role</Label>
              <UserDetailInput value={user.role || ""} />
            </div>
          </div>
        ) : (
          <div>Fetching Details...</div>
        )}
      </div>
    </div>
  );
};

const UserDetailInput = ({ value }: { value: string }) => {
  return <Input value={value} disabled />;
};

export default DetailsSection;
