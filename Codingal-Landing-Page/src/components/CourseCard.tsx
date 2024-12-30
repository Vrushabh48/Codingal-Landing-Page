import React from "react";

const CourseCard: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto rounded-lg shadow-md border border-gray-200 bg-white p-4 hover:bg-[#f4d7d779]">
      <div className="relative">
        <img
          src="https://fastly.codingal.com/images/home/courses/card/coding-grandmaster.webp?optimize=medium&width=530" // Replace with the actual image URL
          alt="Course Preview"
          className="rounded-lg w-full"
        />
        <div className="absolute top-2 right-2 bg-gray-100 text-gray-800 text-sm font-medium rounded px-2 py-1">
          Age 5-17
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-900 mr-11">
          Coding Prodigy: Code Like a Pro
        </h2>
        <div className="flex flex-wrap items-center text-sm text-gray-600 mt-2">
          <p className="flex items-center mr-4">
            <span className="material-icons-outlined text-red-500 mr-1">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                />
              </svg>
            </span>
            Grade 1-12
          </p>
          <p className="flex items-center mr-4">
            <span className="material-icons-outlined text-red-500 mr-1">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                />
              </svg>
            </span>
            184+ Activities
          </p>
          <p className="flex items-center mr-4">
            <span className="material-icons-outlined text-red-500 mr-1">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
              </svg>
            </span>
            96 Lessons
          </p>
          <p className="flex items-center ml-1">
            <span className="material-icons-outlined text-red-500 mr-1">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            9-12 months
          </p>
        </div>

        <p className="text-gray-700 text-sm mt-4">
          A 96-lesson coding curriculum designed for kids and teens to master
          coding skills, fostering creativity and technical proficiency.
        </p>

        <h3 className="font-semibold text-gray-900 mt-4">Learning outcomes</h3>
        <ul className="list-none text-sm text-gray-700 mt-2 space-y-1">
          <li className="flex items-center">
            <span className="material-icons-outlined text-green-500 mr-2">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            Learn to code like a pro
          </li>
          <li className="flex items-center">
            <span className="material-icons-outlined text-green-500 mr-2">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            Create amazing apps and games
          </li>
          <li className="flex items-center">
            <span className="material-icons-outlined text-green-500 mr-2">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            Earn Coding Prodigy certificate (STEM.org Accredited)
          </li>
          <li className="flex items-center">
            <span className="material-icons-outlined text-green-500 mr-2">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-[#e85f5f]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
            </span>
            Master the art of problem solving
          </li>
        </ul>

        <button className="mt-4 text-red-500 font-medium hover:underline ml-10">
          Download curriculum
        </button>

        <button className="w-full mt-4 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600">
          Try a free lesson
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
