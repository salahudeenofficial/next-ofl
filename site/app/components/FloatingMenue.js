import Link from "next/link";
export default function FloatingMenu({ onClose }) {
  const services = [
    {
      name: "Freight Services",
      subs: [
        ["Sea Freight", "#"],
        ["Road Freight", "#"],
        ["Freight Insurance", "#"],
      ],
    },
    {
      name: "Warehousing & other Services",
      subs: [
        ["Consolidation Service", "#"],
        ["Customs Clearance", "#"],
        ["Project & Oversize Shipments Transportation", "#"],
        ["Event Logistics", "#"],
        ["Warehouse and Packaging", "#"],
      ],
    },
    {
      name: "Verticals",
      subs: [
        "Aerospace & Defence",
        "Automotive & Mobility",
        "Fast  Moving Consumer Goods",
        "Healthcare",
        "High Tech",
        "Industrial",
        "Retail",
      ],
    },
  ];
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-12 shadow-lg w-3/4 h-2/4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-sm  hover:bg-custom-blue hover:text-white font-bold py-2 px-4 rounded"
        >
          X
        </button>
        <div className="flex flex-row gap-20">
          {services.map((obj, index) => {
            if (index == 2) {
              return (
                <div className="flex flex-col bg-gray-50 p-5 pb-3">
                  <h2 className="text-l` text-black font-josefin pb-5">
                    {obj.name}
                  </h2>
                  {obj.subs.map((ser) => (
                    <p className="text-xs pt-2 text-cusom-grey">{ser}</p>
                  ))}
                </div>
              );
            } else {
              return (
                <div className="flex flex-col pt-5">
                  <h2 className="text-l text-black font-josefin pb-5">
                    {obj.name}
                  </h2>
                  {obj.subs.map((ser) => (
                    <Link
                      href={ser[1]}
                      className="text-xs pt-2 text-cusom-grey hover:border-black hover:border-b-2"
                    >
                      {ser[0]}
                    </Link>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
