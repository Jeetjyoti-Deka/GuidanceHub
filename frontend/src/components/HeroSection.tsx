import { Clock, Star } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-20" id="home">
      <Container>
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-5xl font-bold text-green-950">
            THE FUTURE OF LEARNING NEW SKILLS.
          </h1>
          <p>
            Industry Experts are waiting for you to choose them. Let's get
            learning.
          </p>
          <div className="flex items-center gap-x-4 mt-4">
            <Button variant={"primary"} size={"primary"}>
              Get Started
            </Button>
            <Button variant={"secondary"} size={"secondary"}>
              Try Demo
            </Button>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <div className="flex items-center gap-x-1">
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
              <p className="leading-none ml-1">5.0</p>
            </div>
            <p className="text-green-950/40">from 100+ reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-x-3 items-end">
          <HeroCard1 />
          <HeroCard2 />
          <HeroCard3 />
          <HeroCard4 />
          <HeroCard5 />
        </div>
      </Container>
    </div>
  );
};
export default HeroSection;

const HeroCard1 = () => {
  return (
    <div className="border-green-950/15 shadow-md border-[1px] rounded-3xl w-full h-80 px-2 flex items-center justify-center">
      <Image
        src={"/hero_card_1.svg"}
        width={100}
        height={100}
        alt="img"
        className="w-full object-contain"
      />
    </div>
  );
};

const HeroCard2 = () => {
  return (
    <div className="bg-green-950/90 flex flex-col items-center justify-center gap-y-1 py-4 px-2 w-48 h-60 rounded-3xl justify-self-center">
      <h2 className="text-white text-3xl font-semibold">1000+</h2>
      <p className="text-white/75 font-extralight">Esteemed Mentors</p>
    </div>
  );
};

const HeroCard3 = () => {
  return (
    <div className="bg-white shadow-md rounded-3xl w-full h-48 px-2 flex flex-col items-center justify-center">
      <h2 className="text-green-950 text-3xl font-semibold">2500+</h2>
      <p className="text-green-950/75 font-extralight">Already onboard.</p>
      <p className="text-green-950/75 font-extralight">
        Start your journey now!
      </p>
    </div>
  );
};

const HeroCard4 = () => {
  return (
    <div className="bg-green-100 flex flex-col items-center justify-center gap-y-1 py-4 px-2 w-48 h-60 rounded-3xl justify-self-center">
      <h2 className="text-green-950 text-3xl font-semibold">6+</h2>
      <p className="text-green-950/75 font-extralight">years of service</p>
    </div>
  );
};

const HeroCard5 = () => {
  return (
    <div className="bg-green-950/90 shadow-md rounded-3xl w-full h-80 px-8 pb-8 flex flex-col items-start gap-y-2 justify-end relative">
      <Image
        src={"/hero_card_5.svg"}
        width={150}
        height={150}
        alt="svg"
        className="absolute top-0 left-0 opacity-25"
      />
      <Clock className="w-5 h-5 text-white" />
      <h3 className="text-white/90 text-lg">
        Achieve Optimal Efficiency and Boost Productivity
      </h3>
    </div>
  );
};
