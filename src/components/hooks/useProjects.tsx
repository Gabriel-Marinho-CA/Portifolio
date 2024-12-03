import { useEffect, useState } from "react";

interface IProject {
  name: string;
  subtitle: string;
  photo: string;
  description: string;
  link: string;
  github: boolean;
}
interface IApiResponse {
  projects: IProject[];
}

const getAllProjects = async (): Promise<IProject[] | undefined> => {
  try {
    const request = await fetch("/api/projects");
    const response: IApiResponse = await request.json();

    return response.projects;
  } catch (error) {
    console.error("Error in skills api", error);
    return undefined;
  }
};

export function useProject() {
  const [projects, setProjects] = useState<IProject[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProjects();
      if (data) {
        setProjects(data);
      }
    };
    fetchData();
  }, []);
  return {projects};
}
