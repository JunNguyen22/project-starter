import { data, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return data({ data: "projects" }, { status: 200 });
};

export default function Projects() {
  const loaderData = useLoaderData();

  return <div>Projects: {loaderData.data}</div>;
}
