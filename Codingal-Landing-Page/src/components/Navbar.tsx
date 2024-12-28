export const Navbar = () => {
  return (
    <nav className="sticky top-0 flex h-16 z-30 shadow bg-white">
      <div className="lg:hidden mt-[12px] ml-6 w-full">
        <div>
          <img
            className="w-[120px] h-[32px] mt-[6px]"
            src="https://fastly.codingal.com/images/logos/logos-christmas/logo-with-text.svg"
            alt=""
          />
        </div>
      </div>
      <div className="z-20 flex items-center justify-between w-full px-5">
        <div className="hidden md:flex md:flex-1 md:space-x-3 xl:space-x-5">
          <div>
            <img
              className="w-[120px] h-[32px] mt-[6px]"
              src="https://fastly.codingal.com/images/logos/logos-christmas/logo-with-text.svg"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <button className="flex items-center group focus:outline-none"><span className="text-grey group-hover:text-orange-500 font-500 md:font-600 text-xl md:text-lg">Courses</span></button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-1 text-grey group-hover:text-orange-600"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <div className="mt-10 lg:absolute top-0 left-0 bg-white rounded-lg lg:shadow-xl lg:space-y-3 overflow-hidden w-0 h-0">
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                <div><a className="flex items-center space-x-5 border-b group border-grey-300 pb-1" href=""><span className="text-lg inline-block text-grey font-500 lg:font-600 group-hover:text-orange lg:text-base">AI and Machine Learning</span></a></div>
                
            </div>
          </div>
          <div className="flex items-center">
          <button className="flex items-center group focus:outline-none"><span className="text-grey group-hover:text-orange-500 font-500 md:font-600 text-xl md:text-lg">Camps</span></button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-1 text-grey group-hover:text-orange"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <a
            className="inline-block py-2 text-lg align-middle font-600 text-grey hover:text-orange-500"
            href=""
          >
            Competitons
          </a>
          <a
            className="inline-block py-2 text-lg align-middle font-600 text-grey hover:text-orange-500"
            href=""
          >
            Quizzes
          </a>
          <a
            className="inline-block py-2 text-lg align-middle font-600 text-grey hover:text-orange-500"
            href=""
          >
            Blog
          </a>
        </div>
        <div className="hidden ml-4 md:flex items-center space-x-4 py-2">
          <button className="inline-block p-2 text-lg font-medium align-middle font-600 text-grey hover:text-orange-500 focus:outline-none">
            Login
          </button>
          <button className="inline-block p-2 text-lg font-medium align-middle font-600 text-grey hover:text-orange-500 focus:outline-none">
            Join Class
          </button>
          <button className="inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 h-11 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
        </div>
      </div>
    </nav>
  );
};
