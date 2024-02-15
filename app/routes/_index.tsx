import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Phone" },
    { name: "description", content: "Welcome to Store Phone!" },
  ];
};

export default function IndexRouter() {
  return (
   <main>
      main
   </main>
  );
}
