export const GuranteeSection = () => {
  return (
    <div className="mb-10">
      <div className="font-poppins text-gray-700 font-medium text-2xl lg:text-4xl flex justify-center mt-8 mb-2">
        <h1>
          You are in <span className="underline underline-offset-1 decoration-yellow-500">safe hands</span> at Codingal
        </h1>
      </div>
      <div className="font-poppins text-gray-500 text-xl lg:text-xl mt-8 mb-3 flex justify-center">
        <h1>
          Like thousands of other parents who have enrolled their kids and teens
        </h1>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:ml-44 lg:mr-44 ml-3 mr-3 border mt-10">
        <div className="flex justify-center">
          <img
            src="https://fastly.codingal.com/images/home/money-guarantee.webp?optimize=medium&width=168"
            alt=""
          />
        </div>
        <div className="col-span-2 justify-between flex flex-col font-poppins text-base">
          <div className="mt-5 mb-5 ml-2">
            <p>At Codingal, we are passionate about customer satisfaction.</p>
          </div>
          <div className="mt-5 mb-5 ml-2">
            <p>
              Therefore, we have a 100% moneyback guarantee policy. If we do not
              meet your expectations, you have the right to cancel your purchase
              and get your money back. It's as simple as that.
            </p>
          </div>
          <div className="mt-5 mb-5 ml-2">
            <p>
              If at any point, you feel that you wish to discontinue using
              Codingal, please email us at <a className="underline" href="">billing@codingal.com</a> and we will
              immediately process your refund for the remaining lessons/classes,
              no questions asked.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <button className="mt-10 w-[300px] h-[50px] inline-block align-middle border rounded focus:outline-none font-700 px-6 lg:px-10 py-2 bg-[#ff5a43] text-white hover:bg-[#ff5943e5] active:bg-orange-800">
            Try a Free Lesson
          </button>
      </div>
    </div>
  );
};
