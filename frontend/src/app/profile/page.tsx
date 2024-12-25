import ConnectionsSection from "@/components/ConnectionsSection";
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
      {/* TODO: wrapping all the section in a single section and then fetching the user and passing the user to each section (if possible) */}
      <RoleSection />
      {/* TODO: rename this to SkillSection */}
      <Skills />
      <ConnectionsSection />
    </div>
  );
};
export default ProfilePage;
