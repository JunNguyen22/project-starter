import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return Response.json({ name: "Projects" });
};

export default function Projects() {
  const loaderData = useLoaderData<typeof loader>();

  return <div>Projects: {loaderData.name}</div>;
}
