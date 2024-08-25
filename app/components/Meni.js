// components/Menu.js
import Link from "next/link";

import { useState } from "react";

const Menu = ({ isOpen, toggleMenu }) => {
  const ess_servs = [
    {
      name: "Air Logistics",
      description:
        "At Orbit Freight Logistics Agency (OFL), we take pride in offering comprehensive air freight services across the Kingdom of Saudi Arabia, the entire GCC region, and worldwide. We understand the critical role air freight plays in today's fast-paced business environment.",
      image: "/next-ofl/public/airlogistics.svg",
      url: "#",
    },
    {
      name: "Sea Freight",
      description:
        "Orbit Freight Logistics Agency (OFL) empowers your business to navigate the global marketplace with our comprehensive sea freight services. We operate across all ports in Saudi Arabia, the GCC region, and beyond, with a global reach ensuring seamless delivery wherever",
      image: "/next-ofl/public/seafrieght.svg",
      url: "#",
    },
    {
      name: "Road Freight",
      description:
        "Orbit Freight Logistics Agency (OFL) keeps your business moving across the Kingdom and beyond with our comprehensive road freight services. Our network spans all Saudi Arabian border crossings, ensuring seamless and efficient delivery throughout the region and beyond.",
      image: "/next-ofl/public/roadfreight.svg",
      url: "#",
    },

    {
      name: "Project & Oversize Shipments",
      description:
        "At Orbit Freight Logistics (OFL), we understand that handling out-of-gauge and bulk shipments requires specialized expertise. That's why we offer tailored solutions for your complex and oversized cargo, ensuring efficient, safe, and cost-effective transportation globally.",
      image: "/next-ofl/public/over.svg",
      url: "#",
    },
    {
      name: "Consolidation service",
      description:
        "At Orbit Freight & Logistics (OFL), we're obsessed with providing the most efficient and cost-effective solutions for your global supply chain. That's why we offer a powerful consolidation service designed to save you time and money.Introducing our Amsterdam Consolidation Hub",
      image: "/next-ofl/public/consolidation.svg",
      url: "#",
    },
    {
      name: "Event Logistics",
      description:
        "Orbit Freight & Logistics: Your Stress-Free Event Logistics Partner      Planning an event can be overwhelming. At Orbit Freight & Logistics, we understand the countless details involved, from booth setup to equipment transport. That's why we offer customized",
      image: "/next-ofl/public/event.svg",
      url: "#",
    },

    {
      name: "Customs Clearance",
      description:
        "Orbit Freight Logistics Agency (OFL) understands the complexities of navigating customs regulations. That's why we offer comprehensive and efficient customs clearance services across all ports in the Kingdom of Saudi Arabia. Our team of highly experienced professionals, equipped with in-depth",
      image: "/next-ofl/public/customs.svg",
      url: "#",
    },
    {
      name: "Warehouse and Packaging",
      description:
        "At Orbit Freight Logistics (OFL), we understand the importance of reliable storage for your valuable goods. That's why we offer comprehensive warehousing solutions tailored to meet your specific needs.Our Warehousing Services in Riyadh offers.",

      image: "/next-ofl/public/warehouse.svg",
      url: "#",
    },
    {
      name: "Freight Insurance",
      description:
        "While everyone involved strives for a smooth delivery, unforeseen circumstances like natural disasters can threaten your cargo. Here at Orbit Freight Logistics (OFL), we understand the importance of protecting your goods during transport. That's why we offer comprehensive.",

      image: "/next-ofl/public/insurance.svg",
      url: "#",
    },
  ];

  const [isPlusOpen, setisPlusOpen] = useState(false);
  const toggleop = () => {
    setisPlusOpen(!isPlusOpen);
  };
  return (
    <div
      className={`fixed p-0 top-0 left-0 right-0 bg-white text-gray-800 shadow-lg ${isOpen ? "block" : "hidden"} transition-transform transform ${isOpen ? "translate-y-0" : "translate-y-[-100%]"}`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-2xl text-gray-800"
      >
        ✕
      </button>
      <nav className="p-6 text-custom-blue font-josefin">
        <Link href="#" className="block py-2 text-lg border-b-2 ">
          Home
        </Link>
        <Link href="#" className="block py-2 text-lg border-b-2">
          About Us
        </Link>
        <button
          onClick={toggleop}
          className="flex flex-row justify-between w-full border-b-2 py-2 "
        >
          <div className="text-lg">Our Solutions</div>
          <div className="text-2xl  ">{isPlusOpen ? "-" : "+"}</div>
        </button>
        {isPlusOpen && (
          <div className="m-0 p-5 bg-custom-blue flex flex-col w-full">
            {ess_servs.map((obj, index) => (
              <Link
                key={index}
                className="font-josefin text-lg text-white border-b-2"
                href={obj.url}
              >
                {obj.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Menu;
