import { data, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return data({ data: "test" }, { status: 200 });
};

export default function Tasks() {
  const loaderData = useLoaderData();

  return <div>Tasks: {loaderData.data}</div>;
}
