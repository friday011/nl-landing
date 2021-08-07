import { useState } from "react";

import { HiMenu } from "react-icons/hi";

const navigation = [
  "TMR2020",
  "TMR Reports",
  "News",
  "About Us",
  "Archive",
  "Partners",
];

const MobNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="relative z-20 p-2 rounded-full outline-none hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu className="h-6 w-6" />
      </button>
      {isOpen && (
        <>
          <button
            className="fixed w-full h-full inset-0 bg-black opacity-50 cursor-default outline-none focus:outline-none"
            onClick={() => setIsOpen(false)}
            tabIndex="-1"
          ></button>
          <div className="absolute mt-2 left-0 w-40 py-3 rounded-md shadow-xl bg-gray-50 flex flex-col space-y-2 md:hidden font-medium">
            {navigation.map((item, i) => (
              <div
                key={i}
                onClick={() => setIsOpen(false)}
                className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full flex-shrink-0 sticky bg-white inset-0 top-0 z-20 h-16 shadow-sm">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="px-4 flex items-center justify-between">
          <MobNavMenu />
          <div className="cursor-pointer">
            <img src="./images/logo.png" alt="TMR Logo" />
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map((item, i) => (
              <p key={i} className="font-medium cursor-pointer">
                {item}
              </p>
            ))}
          </div>
          <div>
            <button className="px-2 sm:px-3 py-2 rounded shadow bg-primary text-white font-semibold sm:font-bold outline-none focus:outline-none">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
