import { MetaFunction } from "@remix-run/node";

import Hero from "~/components/custom/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RootRoute() {
  return <Hero />;
}
