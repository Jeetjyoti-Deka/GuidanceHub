import { UserRound } from "lucide-react";
import Image from "next/image";

const UserImage = ({ img }: { img: string | null }) => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden">
      {img ? (
        <Image
          src={img}
          width={60}
          height={60}
          alt="user"
          className="w-full object-contain"
        />
      ) : (
        <UserRound className="w-full h-full" />
      )}
    </div>
  );
};
export default UserImage;
