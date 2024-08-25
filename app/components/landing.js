"use client";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const scrollToContactUs = () => {
    document
      .getElementById("contact-us")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex relative z-0 flex-col md:flex-row h-screen  overflow-x-hidden">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 h-full md:h-full">
        <div className="hidden md:block ">
          <Image
            src="/images/im1.png" // Replace with your image path
            alt="Port and logistics"
            style={{ objectFit: "cover", objectPosition: "left" }}
            fill
            quality={100}
          />
        </div>
        <div className="block md:hidden ">
          <Image
            src="/images/mobim1.png" // Replace with your image path
            alt="Port and logistics"
            style={{ objectFit: "cover", objectPosition: "right" }}
            fill
            quality={100}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-8 text-white">
          <h1 className="hidden md:block text-6xl font-bold mb-12 md:mb-4">
            We help you Move Your
            <br /> Dream.
          </h1>
          <h1 className="md:hidden block text-6xl font-normal mb-16 ">
            We help you <br />
            Move Your
            <br /> Dream.
          </h1>
          <p className="mb-16 md:mb-12 md:text-xl md:mb-6">
            OFL offers complete logistic solutions for GCC exporters and
            importers, with optimized supply chain systems internationally.
          </p>
          <button
            onClick={scrollToContactUs}
            className="bg-blue-800 md:text-xl text-white py-3 px-7 md:px-10"
          >
            Connect with Us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-col md:w-1/2 h-full">
        <div className="relative w-full h-1/2">
          <Image
            src="/images/im2.png" // Replace with your image path
            alt="Supply Chain Efficiency"
            style={{ objectFit: "cover" }}
            fill
            quality={100}
          />
          <div className="ml-7 absolute bottom-0 left-0 w-full p-8 text-white">
            <h2 className="mb-7 text-3xl md:text-4xl font-semibold">
              Increase your supply
              <br /> chain efficiency
            </h2>
            <p className="text-lg mb-4">
              Explore Sea Freight , consolidation services, freight insurance
              ,Customs clearance and more ...
            </p>
          </div>
        </div>
        <div className="relative w-full h-1/2">
          <Image
            src="/images/im3.png" // Replace with your image path
            alt="Events Hosting"
            style={{ objectFit: "cover" }}
            fill
            quality={100}
          />
          <div className="ml-7 absolute bottom-0 left-0 p-8 text-white">
            <h2 className="mb-7 text-3xl md:text-4xl font-semibold">
              Make sure hectic-free
              <br /> events hosting
            </h2>
            <p className="text-lg mb-4">
              Explore Event logistic , Road freight , oversize - shipments and
              more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
