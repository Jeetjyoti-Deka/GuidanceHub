import Container from "@/components/Container";
import UserWrapper from "@/components/UserWrapper";
import { getToken } from "@/lib/server-utils";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const token = await getToken();
  if (!token || token === "") {
    redirect("/login");
  }

  return (
    <div>
      <Container>
        {/* TODO: wrapping all the section in a single section and then fetching the user and passing the user to each section (if possible) */}
        <UserWrapper />

        {/* TODO: rename this to SkillSection */}
      </Container>
    </div>
  );
};
export default ProfilePage;
