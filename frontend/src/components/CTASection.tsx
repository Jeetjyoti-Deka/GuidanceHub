"use client";

import Image from "next/image";
import Container from "./Container";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <div className="py-20 bg-primary overflow-hidden relative mt-40">
      <Image
        src={"/bg_mesh.svg"}
        alt="bg"
        width={100}
        height={100}
        className="w-full object-cover absolute top-0 inset-x-0 z-10 opacity-50"
      />
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-6 relative z-50">
          <h2 className="text-white text-3xl sm:text-5xl text-center font-semibold">
            From Aspiration to Achievement
          </h2>
          <p className="text-white/75 max-w-prose text-center">
            Accelerate your growth with our mentorship platform. Build
            meaningful connections, gain valuable insights, and achieve your
            goals faster. Start your journey today!
          </p>
          <Button variant={"secondary"} size={"secondary"} className="mt-6">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default CTASection;
