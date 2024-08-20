"use client";
import { useState } from "react";
import Image from "next/image";
const options = ["Freight Solutions", "Transport Solutions", "Other Solutions"];
const services = [
  [
    {
      name: "Air Logistics",
      description:
        "At Orbit Freight Logistics Agency (OFL), we take pride in offering comprehensive air freight services across the Kingdom of Saudi Arabia, the entire GCC region, and worldwide. We understand the critical role air freight plays in today's fast-paced business environment.",
      image: "/airlogistics.svg",
    },
    {
      name: "Sea Freight",
      description:
        "Orbit Freight Logistics Agency (OFL) empowers your business to navigate the global marketplace with our comprehensive sea freight services. We operate across all ports in Saudi Arabia, the GCC region, and beyond, with a global reach ensuring seamless delivery wherever",
      image: "/seafrieght.svg",
    },
    {
      name: "Road Freight",
      description:
        "Orbit Freight Logistics Agency (OFL) keeps your business moving across the Kingdom and beyond with our comprehensive road freight services. Our network spans all Saudi Arabian border crossings, ensuring seamless and efficient delivery throughout the region and beyond.",
      image: "/roadfreight.svg",
    },
  ],
  [
    {
      name: "Project & Oversize Shipments",
      description:
        "At Orbit Freight Logistics (OFL), we understand that handling out-of-gauge and bulk shipments requires specialized expertise. That's why we offer tailored solutions for your complex and oversized cargo, ensuring efficient, safe, and cost-effective transportation globally.",
      image: "/over.svg",
    },
    {
      name: "Consolidation service",
      description:
        "At Orbit Freight & Logistics (OFL), we're obsessed with providing the most efficient and cost-effective solutions for your global supply chain. That's why we offer a powerful consolidation service designed to save you time and money.Introducing our Amsterdam Consolidation Hub",
      image: "/consolidation.svg",
    },
    {
      name: "Event Logistics",
      description:
        "Orbit Freight & Logistics: Your Stress-Free Event Logistics Partner      Planning an event can be overwhelming. At Orbit Freight & Logistics, we understand the countless details involved, from booth setup to equipment transport. That's why we offer customized",
      image: "/event.svg",
    },
  ],
  [
    {
      name: "Customs Clearance",
      description:
        "Orbit Freight Logistics Agency (OFL) understands the complexities of navigating customs regulations. That's why we offer comprehensive and efficient customs clearance services across all ports in the Kingdom of Saudi Arabia. Our team of highly experienced professionals, equipped with in-depth",
      image: "/customs.svg",
    },
    {
      name: "Warehouse and Packaging",
      description:
        "At Orbit Freight Logistics (OFL), we understand the importance of reliable storage for your valuable goods. That's why we offer comprehensive warehousing solutions tailored to meet your specific needs.Our Warehousing Services in Riyadh offers.",

      image: "/warehouse.svg",
    },
    {
      name: "Freight Insurance",
      description:
        "While everyone involved strives for a smooth delivery, unforeseen circumstances like natural disasters can threaten your cargo. Here at Orbit Freight Logistics (OFL), we understand the importance of protecting your goods during transport. That's why we offer comprehensive.",

      image: "/insurance.svg",
    },
  ],
];
const getpadding = (index) => {
  switch (index) {
    case 0:
      return "pl-20"; // Padding 0.5rem
    case 1:
      return "pl-0"; // Padding 1rem
    case 2:
      return "pl-0 pr-20";
  }
};
const ServiceSelector = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className=" w-full bg-white pt-10">
      <h1 className="text-custom-blue font-josefin text-lg pl-20 pb-10">
        OUR SERVICES
      </h1>

      <div className="pl-20  flex flex-row gap-2 ">
        <label className="font-josefin text-xs pt-1 pr-5">Please select:</label>
        <select
          className=" h-5  w-72 text-xs bg-white border-b-2 border-black"
          onChange={(e) => setSelectedService(services[e.target.value])}
          defaultValue="0"
        >
          {services.map((service, index) => (
            <option key={index} value={index}>
              {options[index]}
            </option>
          ))}
        </select>
      </div>

      {selectedService && (
        <div className=" grid sm:grid-cols-3 gap-2 pt-5 pl-20 pr-20 pb-40">
          {selectedService.map((sub_service, index) => (
            <div key={index}>
              <Image
                src={sub_service.image}
                alt={sub_service.name}
                width={100}
                height={100}
                className="w-full h-auto"
              />
              <h3 className="pt-2 pb-2 text-custom-blue font-josefin ">
                {sub_service.name}
              </h3>

              <p className="text-xs text-cusom-grey">
                {sub_service.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
