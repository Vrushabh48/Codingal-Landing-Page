export const PricingSection = () => {
    return(
        <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl lg:text-4xl lg:ml-36 lg:mr-36 font-semibold text-center mb-8 p-3">
        <span className="underline decoration-yellow-500">Flexible pricing</span> with <span className="underline decoration-yellow-500">personalized lessons and activities</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-[150px] mr-[150px]">
        <div className="border border-gray-300 rounded-lg shadow-md bg-white relative hover:scale-105">

          <div className="w-[150px] text-center absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm px-4 py-1 rounded-lg shadow">
            Bestseller
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-red-600 text-white text-center py-4 rounded-t-lg">
            <h3 className="text-xl font-bold">8 classes / month</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 2 classes per
                week
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 8+ fun and
                engaging activities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 8 Coding quizzes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Access to
                complete coding module
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Expert-designed,
                project-based curriculum paired with hands-on activities and
                projects
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Progress
                Tracking - Parent Teacher Meet
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Unlimited doubt
                sessions, available 24*7
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg shadow-md bg-white hover:scale-105">
          <div className="bg-gradient-to-r from-purple-600 to-red-600 text-white text-center py-4 rounded-t-lg ">
            <h3 className="text-xl font-bold">12 classes / month</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 3 classes per
                week
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 12+ fun and
                engaging activities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> 12 Coding quizzes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Access to
                complete coding modules
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Expert-designed,
                project-based curriculum paired with hands-on activities and
                projects
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Progress
                Tracking - Parent Teacher Meet
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Unlimited doubt
                sessions, available 24*7
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="items-center flex justify-center mb-5">
      <button className="mt-10 w-[300px] h-[60px] inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
      </div>
    </div>
    )
}