
const LearningDashboardSection = () => {
  return (
    <section className="font-poppins flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-6">
      <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
        <div className="relative w-[500px] h-64 lg:h-72 bg-purple-100 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://fastly.codingal.com/images/home/dashboard-demo-1.webp?optimize=medium&width=544"
            alt="Sneak peek into the dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          Intuitive learning dashboard for kids and parents
        </h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-600 mb-6">
          <li>Class management & progress tracking</li>
          <li>Easy rescheduling of classes</li>
          <li>Session notes</li>
          <li>Certificates of completion</li>
          <li>Course and instructor information</li>
          <li>
            Access to global coding competitions, masterclasses, quizzes,
            resources, and much more.
          </li>
        </ul>
        <button className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-red-600">
          Try a free lesson
        </button>
      </div>
    </section>
  );
};

export default LearningDashboardSection;
