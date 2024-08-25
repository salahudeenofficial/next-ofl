import React from "react";

const A1Desktop = () => {
  return (
    <div className="bg-white pb-28">
      <div className="flex flex-col">
        <div className=" text-black py-10 p-20 text-3xl lg:text-2xl md:text-xl sm:text-lg">
          OUR CUSTOMER PERKS
        </div>
        <div className="flex text-white flex-row bg-[#040A8E] py-16 px-20 text-2xl lg:text-xl md:text-lg sm:text-base justify-between">
          <div className="w-64 flex flex-row items-center gap-6">
            <div>Financial Records</div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.567 2.84352L6.58398 2.83716V40.2803H35.7065L35.7047 20.9798C35.7047 20.5206 35.6649 20.0622 35.5893 19.6092C34.8323 15.0766 32.6244 12.0158 28.0918 12.7727L25.3056 13.238L25.7709 10.4518C25.8465 9.99887 25.8845 9.54045 25.8845 9.08124C25.8845 4.48584 22.1624 2.84352 17.567 2.84352ZM12.402 11.1583C12.402 10.3505 13.0569 9.69564 13.8647 9.69564H19.0651C19.8729 9.69564 20.5277 10.3505 20.5277 11.1583C20.5277 11.966 19.8729 12.6209 19.0651 12.6209H13.8647C13.0569 12.6209 12.402 11.966 12.402 11.1583ZM12.402 19.479C12.402 18.6712 13.0569 18.0163 13.8647 18.0163H28.4259C29.2337 18.0163 29.8885 18.6712 29.8885 19.479C29.8885 20.2868 29.2337 20.9416 28.4259 20.9416H13.8647C13.0569 20.9416 12.402 20.2868 12.402 19.479ZM12.402 25.7195C12.402 24.9117 13.0569 24.2569 13.8647 24.2569H28.4259C29.2337 24.2569 29.8885 24.9117 29.8885 25.7195C29.8885 26.5273 29.2337 27.1821 28.4259 27.1821H13.8647C13.0569 27.1821 12.402 26.5273 12.402 25.7195ZM12.402 31.96C12.402 31.1522 13.0569 30.4974 13.8647 30.4974H28.4259C29.2337 30.4974 29.8885 31.1522 29.8885 31.96C29.8885 32.7678 29.2337 33.4226 28.4259 33.4226H13.8647C13.0569 33.4226 12.402 32.7678 12.402 31.96ZM25.2874 3.18829C30.4889 4.7467 34.0302 8.48092 35.3422 13.8219C34.9809 13.1974 34.5504 12.6128 34.0375 12.0898C32.5469 10.5697 30.6131 9.82218 28.4248 9.85976C28.4262 9.79143 28.4269 9.72307 28.4269 9.6547C28.4269 6.85408 27.2789 4.62918 25.2874 3.18829Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-64 flex flex-row items-center gap-2">
            Track Your Shipment
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7907 38.3231C21.7907 38.3231 33.5853 27.4094 33.5853 16.4188C33.5853 8.83656 28.3047 4.62421 21.7907 4.62421C15.2767 4.62421 9.99609 8.79807 9.99609 16.4188C9.99609 27.4094 21.7907 38.3231 21.7907 38.3231ZM26.8457 16.4186C26.8457 13.6269 24.5825 11.3637 21.7908 11.3637C18.9991 11.3637 16.736 13.6269 16.736 16.4186C16.736 19.2103 18.9991 21.4734 21.7908 21.4734C24.5825 21.4734 26.8457 19.2103 26.8457 16.4186Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-64 flex flex-row items-center gap-6">
            Get Notified
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.4105 12.8062C28.4105 8.97674 25.3061 5.87231 21.4766 5.87231C17.6471 5.87231 14.5427 8.97674 14.5427 12.8062C14.5427 16.6357 17.6471 19.7402 21.4766 19.7402C25.3061 19.7402 28.4105 16.6357 28.4105 12.8062ZM8.15625 32.4524C8.15625 28.6353 11.1809 25.4894 14.9748 25.4894H27.9759C31.7698 25.4894 34.7944 28.6353 34.7944 32.4524V35.3415C34.7944 35.9958 34.264 36.5263 33.6097 36.5263H9.34098C8.68667 36.5263 8.15625 35.9958 8.15625 35.3415V32.4524Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-row bg-white text-black justify-between pt-5 px-20 text-lg lg:text-base md:text-sm sm:text-xs">
          <div className=" w-64 flex flex-col gap-2">
            <div>View the Invoices Issued</div>
            <div>Reconcile the SOA</div>
            <div>Match the Payment</div>
          </div>
          <div className="w-64 flex flex-col gap-2">
            <div>Manage Running Shipments</div>
            <div>Cargo Status</div>
            <div>Upload Documents</div>
          </div>
          <div className="w-64 flex flex-col gap-2">
            <div>On Prior Cargo Delivery</div>
            <div>On Each Milestone in Transit</div>
            <div>On Cargo Clearance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A1Desktop;
