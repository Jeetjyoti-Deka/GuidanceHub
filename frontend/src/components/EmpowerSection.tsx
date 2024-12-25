import Image from "next/image";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";

const EmpowerSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-20 sm:mt-40">
        <div className="col-span-2 flex flex-col items-center sm:items-start justify-center gap-y-3">
          <h2 className="text-primary text-3xl xs:text-5xl font-semibold max-sm:text-center">
            Empower your growth with personalized guidance
          </h2>
          <p className="text-primary/75 max-w-[500px] max-sm:text-center">
            Unlock your true potential by bridging the gap between ambition and
            expertise. Whether you're looking to master new skills, seek career
            advice, or share your expertise with others, we provide the tools to
            make it happen. Take charge of your journey and thrive with the
            power of mentorship.
          </p>
          <Link href={"/login"}>
            <Button variant={"tertiary"} size={"secondary"} className="mt-6">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="max-sm:mt-10">
          <Image
            src={"/empower.svg"}
            alt="img"
            width={200}
            height={200}
            className="w-full object-contain"
          />
        </div>
      </div>
    </Container>
  );
};
export default EmpowerSection;
