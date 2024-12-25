"use client";

import { Skill } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import api from "../lib/axiosConfig";
import { capitalize } from "@/lib/utils";

const Skills = () => {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [skill, setSkill] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get("/skills/user");
        // console.log(res.data);
        // TODO: if res.data.message is unauthorised then redirect to login

        setSkills(res.data.skills);
      } catch (error) {
        // console.log(error);
        if ((error as any)?.status === 401) {
          return router.push("/login");
        }
        // TODO: toast notification that something went wrong
        router.push("/");
      }
    };
    fetchSkills();
  }, []);

  const handleClick = async () => {
    if (skill === "") {
      // TODO: toast notification
    } else {
      try {
        const res = await api.post("/skills", {
          name: skill.toLowerCase().trim(),
        });
        // console.log(res.data);
        setSkill("");
        setSkills((prev) => {
          if (prev === null) {
            return res.data.skill;
          } else {
            return [...prev, res.data.skill];
          }
        });
      } catch (error) {
        // TODO: Toast notification something went wrong try again later
      }
    }
  };

  return (
    <div className="mt-7">
      <h3 className="text-2xl font-semibold mb-2">Skills</h3>
      <div className="bg-slate-100 px-8 py-3 rounded-lg min-h-[228px]">
        <div className="flex items-center gap-x-2">
          <Input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter your skills... eg: React"
          />
          <Button onClick={handleClick} variant={"secondary"}>
            + Add
          </Button>
        </div>
        <div className="mt-3">
          {skills ? (
            skills.length > 0 ? (
              <div className="flex items-center gap-x-3 gap-y-4 flex-wrap max-w-2xl">
                {skills.map((skill) => (
                  <SkillBadge
                    skill={skill}
                    key={skill.id}
                    setSkills={setSkills}
                  />
                ))}
              </div>
            ) : (
              <div>No skills found.Please enter new skills...</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillBadge = ({
  skill,
  setSkills,
}: {
  skill: Skill;
  setSkills: Dispatch<SetStateAction<Skill[] | null>>;
}) => {
  const deleteSkill = async () => {
    try {
      const res = await api.delete(`/skills/${skill.id}`);
      setSkills((prev) => {
        if (prev) {
          return prev.filter((item) => item.id !== skill.id);
        } else {
          return prev;
        }
      });
    } catch (error) {
      // TODO: toast notification - something went wrong
    }
  };

  return (
    <div className="flex w-fit items-center gap-x-3 px-4 py-2 bg-slate-300 rounded-md border-r-2 border-b-2 border-slate-500 shadow-lg">
      {capitalize(skill.name)}
      <div
        onClick={deleteSkill}
        className="p-1 hover:bg-slate-500 cursor-pointer rounded-md font-bold group"
      >
        <X className="w-4 h-4 group-hover:text-slate-300" />
      </div>
    </div>
  );
};

export default Skills;
