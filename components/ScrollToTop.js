import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isShown, setIsShown] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isShown && (
        <button
          aria-hidden="true"
          onClick={scrollToTop}
          className="fixed z-50 right-4 bottom-4 bg-white text-primary rounded-full shadow p-3 sm:p-4 outline-none focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
