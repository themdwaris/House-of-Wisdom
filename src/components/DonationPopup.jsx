import React from "react";

const DonationPopup = ({ isDonationClick, setIsDonationClick }) => {
  return (
    <>
      {isDonationClick && (
        <div
          className={`absolute inset-0 h-screen bg-black/50 flex justify-center `}
        >
          <div
            className={`w-full max-w-2xl px-4 md:px-6 transition-all ${
              isDonationClick ? "translate-y-32 md:translate-y-44" : "-translate-y-10"
            }`}
          >
            <div className="w-full p-3 bg-white rounded-xl border relative">
              <span
                className="text-black text-2xl absolute right-3 top-3 cursor-pointer"
                onClick={() => setIsDonationClick(false)}
              >
                <ion-icon name="close-outline"></ion-icon>
              </span>
              <h1 className="text-center pt-3 text-xl md:text-2xl font-semibold text-gray-700">
                Make your payment here
              </h1>
              <form onSubmit={(e)=>e.preventDefault()}>
              <div className='max-w-2xl flex flex-col gap-5 justify-center items-center p-3 md:p-5 rounded-lg mt-4 dark:bg-gray-600 dark:border-none'>
                <input className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' type="text" name="user" id="" placeholder='Name' />
                <input className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' type="email" name="email" id="" placeholder='Email' />
                <input className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' type="number" name="email" id="" placeholder='Amount' />
                <input className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' type="number" name="email" id="" placeholder='Phone number' />
                
              <button className='w-full text-xl font-semibold text-white bg-red-500 cursor-auto px-2 py-3 rounded-lg mt-3 hover:bg-red-400'>Donate</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationPopup;
