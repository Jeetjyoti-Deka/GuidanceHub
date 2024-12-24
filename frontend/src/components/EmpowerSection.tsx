import Image from "next/image";
import Container from "./Container";
import { Button } from "./ui/button";

const EmpowerSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 mt-40">
        <div className="col-span-2 flex flex-col items-start justify-center gap-y-3">
          <h2 className="text-primary text-5xl font-semibold">
            Empower your growth with personalized guidance
          </h2>
          <p className="text-primary/75  max-w-[500px]">
            Unlock your true potential by bridging the gap between ambition and
            expertise. Whether you're looking to master new skills, seek career
            advice, or share your expertise with others, we provide the tools to
            make it happen. Take charge of your journey and thrive with the
            power of mentorship.
          </p>
          <Button variant={"tertiary"} size={"secondary"} className="mt-6">
            Get Started
          </Button>
        </div>
        <div>
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
