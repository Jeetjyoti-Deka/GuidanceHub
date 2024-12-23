import {
  BarChart2,
  Calendar,
  MessageCircle,
  Search,
  Sparkle,
  UserCheck,
  Users,
} from "lucide-react";

export const NAV_LINKS = [
  {
    text: "Home",
    src: "#home",
  },
  {
    text: "About",
    src: "#about",
  },
  {
    text: "Services",
    src: "#services",
  },
  {
    text: "Contact",
    src: "#contact",
  },
];

export const FEATURES = [
  {
    heading: "Expert Guidance",
    detail:
      "Connect with experienced mentors to receive personalized advice and insights.",
    icon: UserCheck,
  },
  {
    heading: "Skill Matching",
    detail:
      "Find mentors and mentees based on shared skills and interests for meaningful connections.",
    icon: Search,
  },
  {
    heading: "Progress Tracking",
    detail:
      "Monitor your growth and achievements with built-in tools to keep you on track.",
    icon: BarChart2,
  },
  {
    heading: "Flexible Scheduling",
    detail:
      "Schedule sessions at your convenience and make learning fit into your busy lifestyle.",
    icon: Calendar,
  },
  {
    heading: "Community Support",
    detail:
      "Join a thriving community of learners and experts to share knowledge and grow together.",
    icon: Users,
  },
  {
    heading: "Real-Time Feedback",
    detail:
      "Receive instant feedback to improve your skills and accelerate your learning.",
    icon: MessageCircle,
  },
];
