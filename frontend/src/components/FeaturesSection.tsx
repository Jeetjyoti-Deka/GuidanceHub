"use client";

import { FEATURES } from "@/lib/constants";
import Container from "./Container";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturesSection = () => {
  return (
    <div className="bg-primary py-12 mt-20 sm:mt-40">
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h2 className="text-white text-2xl xxs:text-4xl text-center font-bold">
            Unlock Your Potential With Our Platform
          </h2>
          <p className="text-white/75 text-center">
            Connect with experts, and grow smarter with every step
          </p>
        </div>
        <Carousel
          className="sm:hidden mt-10"
          plugins={[
            Autoplay({
              active: true,
              delay: 1400,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent>
            {FEATURES.map((feature, i) => (
              <CarouselItem key={i}>
                <FeatureCard feature={feature} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-20">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const FeatureCard = ({ feature }: { feature: (typeof FEATURES)[number] }) => {
  return (
    <Card className="bg-white/10 border-none p-4 h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        {/* <Sparkle className="w-8 h-8 text-white" /> */}
        <feature.icon className="w-8 h-8 text-white" />
        <MoveUpRight className="w-5 h-5 text-white" />
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2 mt-10">
        <h3 className="text-xl text-white">{feature.heading}</h3>
        <p className="text-white/90">{feature.detail}</p>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
