const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#c53232] to-[#7c36dd] text-white py-12 font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-yellow-300"
                >
                  <span className="material-icons">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-yellow-300"
                >
                  <span className="material-icons">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </span>{" "}
                  X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-yellow-300"
                >
                  <span className="material-icons">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-yellow-300"
                >
                  <span className="material-icons">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clip-rule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </span>{" "}
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-yellow-300"
                >
                  <span className="material-icons">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Reviews and Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  School Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  System Check
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Become a Teacher
                </a>
              </li>
            </ul>
          </div>

          {/* Bestselling Courses Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bestselling Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Scratch Programming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Python for Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Game Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Data Science for Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Roblox
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  AP Computer Science A
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  IOI Algorithms Course
                </a>
              </li>
            </ul>
          </div>

          {/* Trending Articles Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Articles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Coding 101 for Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  How Can Kids Get Started with Coding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Introduction to Scratch Coding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Minecraft - A Game or a Coding Platform?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Block Coding - An A to Z Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Women in STEM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Python for Kids Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Statement */}
        <div className=" border-t border-white border-opacity-50 pt-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white p-2 rounded-full">
              <span className="material-icons text-black">
                <img
                  className="w-[25px]"
                  src="https://fastly.codingal.com/images/logos/logos-main/logo-white.svg?auto=webp&optimize=medium&width=32"
                  alt=""
                />
              </span>
            </div>
            <h4 className="text-xl font-semibold">Codingal Mission</h4>
          </div>
          <p className="mt-3 text-white">
            Codingal is on a mission to inspire school kids and teens to fall in
            love with coding. Coding is proven to develop creativity, logical
            thinking and problem solving skills in kids. Coding is an essential
            skill of the future and more than 60% of all jobs in STEM-related
            fields require knowledge of code. Kids who start learning to code at
            a young age are guaranteed to become leaders, creators and
            entrepreneurs of the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
