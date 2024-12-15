import Skills from "@/components/Skills";
import { getToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const token = await getToken();
  if (!token || token === "") {
    redirect("/login");
  }

  return (
    <div>
      <Skills />
    </div>
  );
};
export default ProfilePage;
