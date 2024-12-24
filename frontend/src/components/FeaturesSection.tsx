import { FEATURES } from "@/lib/constants";
import Container from "./Container";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="bg-primary py-12 mt-40">
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h2 className="text-white text-4xl font-bold">
            Unlock Your Potential With Our Platform
          </h2>
          <p className="text-white/75">
            Connect with experts, and grow smarter with every step
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 mt-20">
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
    <Card className="bg-white/10 border-none p-4">
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
