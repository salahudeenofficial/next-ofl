import Image from "next/image";
import Header from "@/app/components/header";
import Landing from './components/landing';
import ContactUs from './components/contactUs';
import ServiceSelector from "./components/services";
import A1_desktop from "./components/a1_desktop";
import A1_mobile from "./components/a1_mobile";
import Afoot_desktop from "./components/afoot_desktop";
import Afoot_mobile from "./components/afoot_mobile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Landing />
      <ServiceSelector />
      <ContactUs />
      <div class="hidden md:block">
        <A1_desktop />
      </div>
      <div class="block md:hidden">
        <A1_mobile />
      </div>
      <div class="hidden md:block">
        <Afoot_desktop />
      </div>
      <div class="block md:hidden">
        <Afoot_mobile />
      </div>
    </main>
  );
}
