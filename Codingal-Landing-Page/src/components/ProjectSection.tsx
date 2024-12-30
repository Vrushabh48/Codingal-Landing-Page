import Project from "./Project"

export const ProjectSection = () => {
    return(
        <div className="bg-pink-50 pb-10">
            <div className="font-poppins lg:text-4xl text-2xl flex justify-center">
            <h1 className="mt-10 mb-10">See amazing projects <span className="underline decoration-yellow-500">created by our students</span></h1>
            </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 p-3 gap-4 bg-pink-50">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
        <div className="flex flex-col justify-center mt-10 lg:flex-row gap-6 font-poppins">
          <a href="/teach/">
          <button className="p-2 inline-block align-middle border-[#ff5a43] rounded focus:outline-[#ff5a43] font-700 px-6 lg:px-10 py-2 h-11 bg-white text-[#ff5a43] active:bg-orange-800">
            See more Student Project
          </button>
          </a>
          <button className="inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 h-11 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
        </div>
        </div>
    )
}