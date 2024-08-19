import Image from "next/image";
import Header from "@/app/components/header";

import ServiceSelector from "./components/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Header />
      <ServiceSelector />
    </main>
  );
}
