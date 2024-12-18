
import Gulsah from "../assets/Gulsah.jpg";

import useLanguage from "../hooks/useLanguage";
import useDark from "../hooks/useDark";

export default function Main() {
  const { currentContent } = useLanguage();
  const { darkMode } = useDark();
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8 px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col pt-14 w-full md:w-1/2">
        <div className="flex items-center gap-6 my-4">
          <div className="w-24 h-px bg-[#3730A3]"></div>
          <span className="text-[#4338CA] dark:text-[#B7AAFF]">
            Gülşah KARAKILIÇ
          </span>
        </div>

        <h1 className="text-4xl dark:text-[#AEBCCF]  font-bold ">
          {currentContent.title}
        </h1>
        <p className="mt-4 text-gray-700 dark:text-[#FFFFFF] ">
          {currentContent.desc}
        </p>

        <div className="mt-6 space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row ">
          <button
            className={
              darkMode
                ? "px-4 py-2  bg-[#E1E1FF] rounded-md w-full sm:w-auto  text-[#000000] hover:scale-105 duration-300 "
                : "px-4 py-2  bg-[#3730A3] rounded-md w-full sm:w-auto text-white hover:scale-105 duration-300  "
            }
          >
            {currentContent.hireme}
          </button>
          <a
            href="https://github.com/Gulsahkrklc"
            className="w-full sm:w-auto"
          >
            <button className="px-4 py-2 dark:text-[#E1E1FF] dark:bg-[#383838] text-[#3730A3] border-1 border-[#3730A3] rounded-md w-full sm:w-auto  hover:scale-105 duration-300">
              Github
            </button>
          </a>
          <a
            href=""
            className="w-full sm:w-auto"
          >
            <button className="px-4 py-2  text-[#3730A3] dark:text-[#E1E1FF] border-1 border-[#3730A3] rounded-md w-full sm:w-auto dark:bg-[#383838] hover:scale-105 duration-500 ">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
      <div className="flex ">
        {!darkMode ? (
          <img
            className="rounded-3xl w-full md:w-2/3 h-auto mt-5 md:ml-8 border-4 border-transparent bg-gradient-to-r  shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out transform-gpu hover:rotate-3 hover:brightness-125"
            src={Gulsah}
            alt="Profile"
          />
        ) : (
          <img
            className="rounded-3xl w-full md:w-2/3 h-auto mt-5 md:ml-8 border-4 border-transparent bg-gradient-to-r  shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out transform-gpu hover:rotate-3 hover:brightness-125"
            src={Gulsah}
            alt="Profile"
          />
        )}
      </div>
    </div>
  );
}