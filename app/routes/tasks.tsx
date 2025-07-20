import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  return Response.json({ name: "Tasks" });
}

export default function Tasks() {
  const loaderData = useLoaderData<typeof loader>();

  return <div>Tasks: {loaderData.name}</div>;
}
