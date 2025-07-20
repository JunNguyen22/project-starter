import { data } from "@remix-run/node";

export const requireSession = (request: Request) => {
  const cookie = request.headers.get("cookie");
  console.log("test cookie: ", cookie);

  return data({ user: cookie });
};
