const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="flex items-center justify-center min-h-screen bg-gray-50"
    >
      <div className="w-full max-w-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-7 md:mb-2">
          CONTACT US
        </h1>
        <p className="hidden md:block mt-12 text-2sm text-center font-bold text-black mb-5">
          Thank you for choosing us,
        </p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name *"
              className="text-black  mt-1 block w-full p-3 text-lg border-b bg-gray-50 md:bg-white md:border border-gray-300 md:shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="text-black  mt-1 block w-full p-3 text-lg border-b bg-gray-50 md:bg-white md:border border-gray-300 md:shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone number *"
              className="text-black  mt-1 block w-full p-3 text-lg border-b bg-gray-50 md:bg-white md:border border-gray-300 md:shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <select
              className="mt-1 block w-full p-3 text-lg  border-b bg-gray-50 md:bg-white md:border border-gray-300 md:shadow-sm focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-black"
              defaultValue=""
            >
              <option value="" disabled hidden className="text-gray-400 ">
                Choose the service you're interested in
              </option>
              <option className="text-black">Air Freight</option>
              <option className="text-black">Ship Freight</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-lg text-white bg-blue-800 hover:bg-blue-900"
          >
            SEND
          </button>
        </form>
        <div className="mt-12 flex justify-around text-black">
          <svg
            width="30"
            height="30"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2458 0.708984V3.02311C21.5346 3.02311 23.6789 3.60164 25.6787 4.7587C27.582 5.89166 29.0999 7.4103 30.2323 9.31463C31.3887 11.3154 31.967 13.4608 31.967 15.7508H34.2799C34.2799 13.0269 33.5933 10.4958 32.22 8.15757C30.8948 5.89166 29.0999 4.0958 26.8351 2.77C24.4981 1.39599 21.9683 0.708984 19.2458 0.708984ZM7.28348 4.18017C6.63296 4.18017 6.06677 4.38507 5.58491 4.79486L1.86251 8.59147L1.97093 8.51915C1.3686 9.02537 0.971058 9.65211 0.778312 10.3994C0.60966 11.1466 0.657846 11.8698 0.922872 12.5689C1.59748 14.4491 2.50098 16.3775 3.63336 18.3542C5.22351 21.0781 7.11483 23.5248 9.30731 25.6943C12.8249 29.2378 17.1978 32.034 22.4261 34.083H22.4622C23.1609 34.324 23.8596 34.3723 24.5583 34.2276C25.2811 34.083 25.9196 33.7696 26.4737 33.2875L30.1238 29.6355C30.6057 29.1534 30.8466 28.5628 30.8466 27.8638C30.8466 27.1406 30.6057 26.538 30.1238 26.0559L25.3895 21.283C24.9077 20.8009 24.3053 20.5598 23.5825 20.5598C22.8597 20.5598 22.2574 20.8009 21.7756 21.283L19.4987 23.5971C17.6677 22.7293 16.0775 21.6566 14.7283 20.379C13.3791 19.0773 12.3069 17.4984 11.5118 15.6423L13.8248 13.3282C14.3307 12.7979 14.5837 12.1711 14.5837 11.448C14.5837 10.7007 14.2946 10.0981 13.7164 9.64006L13.8248 9.74853L8.98205 4.79486C8.50019 4.38507 7.934 4.18017 7.28348 4.18017ZM19.2458 5.33723V7.65136C20.7154 7.65136 22.0647 8.01294 23.2934 8.7361C24.5463 9.45927 25.5341 10.4476 26.2569 11.7011C26.9797 12.9305 27.3411 14.2804 27.3411 15.7508H29.654C29.654 13.8706 29.1842 12.1229 28.2446 10.5079C27.3049 8.941 26.0521 7.68751 24.486 6.7474C22.8718 5.80729 21.125 5.33723 19.2458 5.33723ZM7.28348 6.49429C7.35576 6.49429 7.44009 6.53045 7.53646 6.60277L12.2708 11.448C12.2949 11.5444 12.2708 11.6288 12.1985 11.7011L8.76521 15.0999L9.01819 15.8231L9.48801 16.8355C9.8735 17.6551 10.3192 18.4506 10.8252 19.222C11.5239 20.3067 12.2949 21.2348 13.1381 22.0062C14.2705 23.115 15.6318 24.1274 17.2219 25.0434C18.017 25.5014 18.6916 25.8389 19.2458 26.0559L19.9686 26.3813L23.4741 22.874C23.5223 22.8257 23.5584 22.8016 23.5825 22.8016C23.6066 22.8016 23.6428 22.8257 23.691 22.874L28.5698 27.7553C28.618 27.8035 28.6421 27.8397 28.6421 27.8638C28.6421 27.8638 28.618 27.8879 28.5698 27.9361L24.9559 31.5158C24.4258 31.9738 23.8476 32.0943 23.2211 31.8773C18.3061 29.973 14.2103 27.3696 10.9336 24.0672C8.90977 22.0423 7.13892 19.7402 5.62105 17.161C4.53685 15.3048 3.69359 13.509 3.09126 11.7734V11.7372C2.99489 11.5203 2.98284 11.2672 3.05512 10.9779C3.1274 10.6645 3.25991 10.4235 3.45266 10.2547L7.0305 6.60277C7.10278 6.53045 7.18711 6.49429 7.28348 6.49429ZM19.2458 9.96548V12.2796C20.2095 12.2796 21.0287 12.6171 21.7033 13.292C22.3779 13.967 22.7152 14.7866 22.7152 15.7508H25.0281C25.0281 14.7143 24.7631 13.75 24.2331 12.8581C23.7271 11.9662 23.0284 11.2672 22.1369 10.761C21.2455 10.2306 20.2818 9.96548 19.2458 9.96548Z"
              fill="black"
            />
          </svg>
          <div className="text-left mr-2">
            <p className="font-semibold text-xs">PHONE</p>
            <p className="text-xs">03 5432 1234</p>
          </div>
          <svg
            className="hidden md:block"
            width="30"
            height="30"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6751 2.1687V8.07495H10.3126V5.71245H3.2251V26.975H5.5876V28.1562C5.5876 29.116 5.93213 29.9404 6.62119 30.6294C7.33486 31.3431 8.17158 31.6999 9.13135 31.6999C10.0911 31.6999 10.9155 31.3431 11.6046 30.6294C12.3183 29.9404 12.6751 29.116 12.6751 28.1562V26.975H31.5751V8.07495H26.8501V2.1687H12.6751ZM15.0376 4.5312H24.4876V10.4375H15.0376V4.5312ZM5.5876 8.07495H7.9501V24.6124H5.5876V8.07495ZM10.3126 10.4375H12.6751V12.8H26.8501V10.4375H29.2126V24.6124H10.3126V10.4375ZM13.8563 15.1625V17.525H16.2188V15.1625H13.8563ZM18.5813 15.1625V17.525H20.9438V15.1625H18.5813ZM23.3063 15.1625V17.525H25.6688V15.1625H23.3063ZM13.8563 19.8875V22.25H16.2188V19.8875H13.8563ZM18.5813 19.8875V22.25H20.9438V19.8875H18.5813ZM23.3063 19.8875V22.25H25.6688V19.8875H23.3063ZM7.9501 26.975H10.3126V28.1562C10.3126 28.4761 10.1896 28.7591 9.94346 29.0052C9.72197 29.2267 9.45127 29.3375 9.13135 29.3375C8.81143 29.3375 8.52842 29.2267 8.28232 29.0052C8.06084 28.7591 7.9501 28.4761 7.9501 28.1562V26.975Z"
              fill="black"
            />
          </svg>

          <div className=" hidden md:block text-left mr-2">
            <p className="font-semibold text-xs">FAX</p>
            <p className="text-xs">03 5432 1234</p>
          </div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.7455 3.34985V5.71534L2.30005 10.5626V30.6499H32.0819V10.5626L24.6364 5.71534V3.34985H9.7455ZM12.2273 5.83167H22.1546V15.3712L17.191 18.5898L12.2273 15.3712V5.83167ZM13.4682 8.31349V10.7953H20.9137V8.31349H13.4682ZM9.7455 8.6625V13.7425L5.82888 11.2219L9.7455 8.6625ZM24.6364 8.6625L28.553 11.2219L24.6364 13.7425V8.6625ZM13.4682 12.0362V14.518H20.9137V12.0362H13.4682ZM4.78187 13.5098L17.191 21.5369L29.6 13.5098V28.168H4.78187V13.5098Z"
              fill="black"
            />
          </svg>

          <div className=" text-left mr-2">
            <p className="font-semibold text-xs">EMAIL</p>
            <p className="text-xs">
              <a href="mailto:info@marcc.com.au" className="hover:underline">
                info@marcc.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
