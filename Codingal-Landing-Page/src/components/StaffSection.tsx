export const StaffSection = () => {
  return (
    <div className="mt-14 ml-[120px] mr-[120px] flex flex-col items-center lg:flex-row gap-x-10 justify-between leading-tight mb-12">
      <div className="hidden lg:block">
        <img
          src="https://fastly.codingal.com/images/locale-images/us/teachers/teachers-v2.webp?optimize=medium&width=471"
          alt=""
        />
      </div>
      <div className="flex flex-col p-3 gap-12">
        <div className="flex flex-col space-y-12">
          <h1 className="text-center lg:text-left text-2xl lg:text-4xl font-600 max-w-2xl font-poppins">
            Learn to code from experienced teachers. Our hand-picked tutors
            ensure the best learning experience
          </h1>
        </div>
        <div>
          <div className="flex flex-wrap justify-center lg:justify-start lg:flex-row gap-3 font-poppins">
            <div className="bg-pink-100 p-3 md:p-5 text-xl w-40 flex flex-col rounded-md">
              <p className="text-2xl font-700 pb-2">🎓 300+</p>
              graduate IT Instructors from India
            </div>
            <div className="bg-pink-100 p-3 md:p-5 text-xl w-40 flex flex-col rounded-md">
              <p className="text-2xl font-700 pb-2">👨‍💻 7+</p>
              Years coding experience
            </div>
            <div className="bg-pink-100 p-3 md:p-5 text-xl w-40 flex flex-col rounded-md">
              <p className="text-2xl font-700 pb-2">👩 91%</p>
              Female teachers
            </div>
            <div className="bg-pink-100 p-3 md:p-5 text-xl w-40 flex flex-col rounded-md">
              <p className="text-2xl font-700 pb-2">💻 10+</p>
              Coding languages
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 font-poppins">
          <a href="/teach/">
          <button className="p-2 inline-block align-middle border-[#ff5a43] rounded focus:outline-[#ff5a43] font-700 px-6 lg:px-10 py-2 h-11 bg-white text-[#ff5a43] active:bg-orange-800">
            Try a Free Lesson
          </button>
          </a>
          <button className="inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 h-11 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
        </div>
      </div>
    </div>
  );
};
