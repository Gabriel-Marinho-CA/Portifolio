import { useState, useEffect } from "react";

interface ISkills {
  name: string;
  icon_path: string;
}

interface IApiResponse {
  skills: ISkills[];
}

async function getSkillsData(): Promise<ISkills[] | undefined> {
  try {
    const request = await fetch("/api/skills");
    const response:IApiResponse = await request.json();
    return response.skills;
  } catch (error) {
    console.error("Error in skills api", error);
    return undefined;
  }
}

export function useSkillsData() {
  const [skills, setSkills] = useState<ISkills[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSkillsData();
      if (data) {
        setSkills(data);
      }
    };
    fetchData();
  }, []);

  return { skills };
}
