import MentorSection from "@/components/MentorSection";
import RoleSection from "@/components/RoleSection";
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
      <RoleSection />
      {/* TODO: rename this to SkillSection */}
      <Skills />
      <MentorSection />
    </div>
  );
};
export default ProfilePage;
