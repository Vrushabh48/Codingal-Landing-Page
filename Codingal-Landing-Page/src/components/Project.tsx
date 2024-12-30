
const Project = () => {
  return (
    <div className="w-[400px] mx-auto p-4 border rounded-lg shadow-lg bg-white hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img
            src="https://fastly.codingal.com/images/home/student-projects/v1/Dance%20party.png?optimize=medium&width=406"
            alt="Project preview"
            className="object-cover w-full h-full"
          />
        </div>

        <img
          src="https://fastly.codingal.com/images/home/student-projects/v1/student-images/Kavin.webp?optimize=medium&width=100"
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-gray-300 mb-2"
        />

        <h2 className="text-lg font-semibold text-gray-700">Kavin</h2>
        <p className="text-sm text-gray-500">Website development</p>
        <p className="text-sm text-gray-500 font-medium mt-1">Grade 10</p>

        <h3 className="text-lg font-bold text-gray-800 mt-4">
          Ticket booking website
        </h3>

        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600">
          View project
        </button>
      </div>
    </div>
  );
};

export default Project;
