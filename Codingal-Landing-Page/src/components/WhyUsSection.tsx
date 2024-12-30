export const WhyUsSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-poppins text-3xl text-center">
          Why children should{" "}
          <span className="underline decoration-yellow-500">learn to code</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left text-gray-600 lg:max-w-4xl lg:mx-auto font-poppins mt-12">
        <div>
          <div className="inline-block max-w-full overflow-hidden relative box-border m-0 ml-10 mt-12">
            <div className="box-border block max-w-full">
              <img
                style={{
                  maxWidth: "100%",
                  display: "block",
                  margin: 0,
                  border: "none",
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </div>
            <img
              alt="Children are full of ideas and coding helps children develop key creative skills"
              src="https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=640"
              decoding="async"
              className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
              srcSet="https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=384 1x, https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=640 2x"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left ml-10 text-gray-800">
          <div className="py-4 text-2xl font-semibold lg:text-3xl">
            Develop key skills
          </div>
          <p className="text-base lg:text-lg">
            Learning to code helps improve a child's logical thinking and
            problem-solving skills by 70%, also enabling them to perform better
            at school.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left text-gray-600 lg:max-w-4xl lg:mx-auto font-poppins mt-12">
      <div className="flex flex-col justify-center text-center lg:text-left ml-10 text-gray-800">
          <div className="py-4 text-2xl font-semibold lg:text-3xl">
          Prepare for the future
          </div>
          <p className="text-base lg:text-lg">
          Children need to learn coding and develop digital skills if they want to be successful in the technology-driven job market of the future.
          </p>
        </div>
        <div>
          <div className="inline-block max-w-full overflow-hidden relative box-border m-0 ml-10 mt-12">
            <div className="box-border block max-w-full">
              <img
                style={{
                  maxWidth: "100%",
                  display: "block",
                  margin: 0,
                  border: "none",
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="https://fastly.codingal.com/images/home/reasons//reason-2.png?auto=webp&optimize=medium&width=384"
              />
            </div>
            <img
              alt="Children are full of ideas and coding helps children develop key creative skills"
              src="https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=640"
              decoding="async"
              className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
              srcSet="https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=384 1x, https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=640 2x"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left text-gray-600 lg:max-w-4xl lg:mx-auto font-poppins mt-12">
        <div>
          <div className="inline-block max-w-full overflow-hidden relative box-border m-0 ml-10 mt-12">
            <div className="box-border block max-w-full">
              <img
                style={{
                  maxWidth: "100%",
                  display: "block",
                  margin: 0,
                  border: "none",
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="https://fastly.codingal.com/images/home/reasons//reason-3.png?auto=webp&optimize=medium&width=384"
              />
            </div>
            <img
              alt="Children are full of ideas and coding helps children develop key creative skills"
              src="https://fastly.codingal.com/images/home/reasons//reason-3.png?auto=webp&optimize=medium&width=384"
              decoding="async"
              className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
              srcSet="https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=384 1x, https://fastly.codingal.com/images/home/reasons//reason-1.png?auto=webp&optimize=medium&width=640 2x"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left ml-10 text-gray-800">
          <div className="py-4 text-2xl font-semibold lg:text-3xl">
          Learn through coding
          </div>
          <p className="text-base lg:text-lg">
          Our STEM-focused curriculum makes coding a learning aid and helps kids develop a deeper understanding of the subjects they study at school.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-12">
      <button className="inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 h-11 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
      </div>
    </div>
  );
};
