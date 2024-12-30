
const NewsSection = () => {
  return (
    <section className="text-center py-12 bg-white font-poppins">
      {/* Section Title */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
        Codingal often makes the news{" "}
        <span className="border-b-4 border-yellow-400"></span>
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-10 mb-8 pt-10 pb-10">
        <img
          src="https://fastly.codingal.com/images/home/articles/v1/yourstory.webp?optimize=medium&width=150"
          alt="YourStory"
          className="h-8"
        />
        <img
          src="https://fastly.codingal.com/images/home/articles/v1/indian-express.webp?optimize=medium&width=150"
          alt="Indian Express"
          className="h-8"
        />
        <img
          src="https://fastly.codingal.com/images/home/articles/v1/the-print.webp?optimize=medium&width=150"
          alt="ThePrint"
          className="h-8"
        />
        <img
          src="https://fastly.codingal.com/images/home/articles/v1/mint.webp?optimize=medium&width=100"
          alt="Mint"
          className="h-8"
        />
        <img
          src="https://fastly.codingal.com/images/home/articles/v1/business-standard.webp?optimize=medium&width=250"
          alt="Business Standard"
          className="h-8"
        />
        <img
          src="https://fastly.codingal.com/images/home/articles/v1/vanguard.webp?optimize=medium&width=135"
          alt="Vanguard"
          className="h-8"
        />
      </div>

      {/* Button */}
      <button className="text-red-500 border border-red-500 rounded-lg px-6 py-2 font-medium hover:bg-red-500 hover:text-white transition">
        See all news articles
      </button>
    </section>
  );
};

export default NewsSection;
