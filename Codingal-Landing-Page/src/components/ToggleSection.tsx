import React, { useState } from "react";

const ToggleSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"plus" | "prime">("plus");

  return (
    <div className="p-6 lg:pl-[200px] lg:pr-[200px] bg-blue-50 rounded-xl mb-10">
      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-10 bg-white p-3">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeSection === "plus"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("plus")}
        >
          Codingal Plus
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeSection === "prime"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("prime")}
        >
          Codingal Prime
        </button>
      </div>

      {/* Content Section */}
      {activeSection === "plus" && (
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            <span className="underline decoration-yellow-500">Codingal Plus:</span> Top-rated coding education for your child
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xl font-poppins">
            <div className="p-6 bg-white rounded-lg">👩‍💻 <span className="underline decoration-yellow-500">Learn</span> together with 2-4 coding buddies</div>
            <div className="p-4 bg-white border rounded-lg">
              🧑‍🏫 <span className="underline decoration-yellow-500">Handpicked</span> coding instructor as per your need
            </div>
            <div className="p-4 bg-white border rounded-lg">
              🎉 <span className="underline decoration-yellow-500">8 fun & engaging</span> classes of 1 hour each every month
            </div>
            <div className="p-4 bg-white border rounded-lg">📚 <span className="underline decoration-yellow-500">Unlimited</span> doubt sessions, available 24x7</div>
            <div className="p-4 bg-white border rounded-lg">
              🏅 <span className="underline decoration-yellow-500">STEM.org </span>accredited certificate for the course
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
          </div>
        </div>
      )}
      {activeSection === "prime" && (
        <div className="space-y-4">
          <h2 className="text-3xl text-center font-semibold text-gray-800">
            With <span className="underline decoration-yellow-500">Codingal Prime,</span> your child gets private tutoring from the best instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-poppins text-xl">
            <div className="p-4 bg-white border rounded-lg">📖 Experience exclusive 1:1 online private tutoring</div>
            <div className="p-4 bg-white border rounded-lg">
              🧑‍🏫 <span className="underline decoration-yellow-500">Handpicked</span> top coding instructor as per your choice
            </div>
            <div className="p-4 bg-white border rounded-lg">
              📅 <span className="underline decoration-yellow-500">Flexible</span> number of weekly classes for your child
            </div>
            <div className="p-4 bg-white border rounded-lg">
              📚 <span className="underline decoration-yellow-500">Unlimited</span> doubt sessions, available 24x7. Absolutely free!
            </div>
            <div className="p-4 bg-white border rounded-lg">
              👨‍🏫 <span className="underline decoration-yellow-500">Personalized</span> attention from instructor in each class
            </div>
            <div className="p-4 bg-white border rounded-lg">
              🔄 <span className="underline decoration-yellow-500">Flexibility</span> to choose class timings & reschedule
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
            <div className="p-4 bg-white border rounded-lg">
              💬 <span className="underline decoration-yellow-500">Dedicated</span> support team to resolve queries 24x7
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center">
      <button className="mt-10 w-[300px] h-[60px] inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
      </div>
    </div>
  );
};

export default ToggleSection;
