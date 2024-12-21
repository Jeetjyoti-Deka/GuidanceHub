import { UserRound } from "lucide-react";
import Image from "next/image";

const UserImage = ({ img }: { img: string | null }) => {
  return (
    <div>
      {img ? (
        <Image src={img} width={100} height={100} alt="user" />
      ) : (
        <UserRound className="w-8 h-8" />
      )}
    </div>
  );
};
export default UserImage;
