import React from "react";
import { useHOWContext } from "../context/useContext";
import DonationPopup from "../DonationPopup";

const Home = () => {
  const { isDonationClick, setIsDonationClick } = useHOWContext();

  return (
    <div className="relative">
      {/* Hero section */}
      <div
        className={`w-full min-h-screen inset-0 bg-[url('/mosque6.jpg')] md:bg-[url('/mosque4.jpg')] bg-cover object-cover`}
      >
        <div className="container max-w-7xl mx-auto px-5 flex flex-col items-center justify-center h-[90vh] md:h-[80vh]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              House of wisdom
            </h1>
            <p className="pt-4 text-2xl text-white mt-3 mb-5 bg-black/10 md:bg-black/10 py-2">
              “He who treads a path in search of knowledge, Allah will make easy
              for him a path to Paradise.”{" "}
              <span className="px-1 py-[2px] text-[12px] md:text-[15px] bg-red-500 text-white font-semibold">
                Sahih Muslim: 2699
              </span>
            </p>
            <h1 className="text-4xl text-white font-semibold">Coming soon.</h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-yellow-50 via-red-50 to-transparent py-5 md:px-7">
        <div className="max-w-7xl mx-auto px-5 md:px-0 pb-10">
          {/* About section */}

          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 my-12 md:my-16">
              ABOUT US
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ">
              <p className="p-3 text-xl text-gray-800 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                officiis beatae animi vero qui ullam error, officia provident
                autem, modi vitae hic excepturi suscipit quis nemo molestias
                exercitationem amet magni, aliquam earum commodi perferendis!
                Illum tempore sed nostrum cupiditate asperiores utem, modi vitae
                hic excepturi suscipit quis nemo molestias exercitationem amet
                magni, aliquam earum commodi perferendis! Illum tempore sed
                nostrum cupiditate asperiores.
              </p>
              <div>
                <img className="w-full rounded-xl" src="/mosque3.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* Vison section */}

          <div className="md:px-7">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 my-12 md:my-16">
              OUR VISON
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="">
                <img
                  className="w-full rounded-xl "
                  src="/library2.jpg"
                  alt=""
                />
              </div>
              <p className="p-3 text-xl text-gray-800 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                officiis beatae animi vero qui ullam error, officia provident
                autem, modi vitae hic excepturi suscipit quis nemo molestias
                exercitationem amet magni, aliquam earum commodi perferendis!
                Illum tempore sed nostrum cupiditate asperiores utem, modi vitae
                hic excepturi suscipit quis nemo molestias exercitationem amet
                magni, aliquam earum commodi perferendis! Illum tempore sed
                nostrum cupiditate asperiores.
              </p>
            </div>
          </div>
        </div>

        {/* News letter section */}
      </div>

      {/* Donation popup */}
      <DonationPopup
        isDonationClick={isDonationClick}
        setIsDonationClick={setIsDonationClick}
      />
    </div>
  );
};

export default Home;
