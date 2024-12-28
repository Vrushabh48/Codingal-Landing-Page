
export const BySection = () => {
    return(
        <div className="lg:flex lg:justify-between p-10 md:ml-28 md:mr-28 mt-7">
            <div className="flex flex-col items-center">
                <h1 className="font-normal font-poppins text-gray-600">Built by alumini of</h1>
                <div className="flex space-x-7 p-3">
                    <img className="h-[30px] w-[100px]" src="https://fastly.codingal.com/images/common//partners/google-medium.webp?optimize=medium&width=120" alt="" />
                    <img className="h-[30px] w-[100px]" src="https://fastly.codingal.com/images/common//partners/amazon.webp?optimize=medium&width=128" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-normal font-poppins text-gray-600">Backed by</h1>
                <div className="flex space-x-7 p-3">
                    <img className="h-[40px] w-[150px]" src="https://fastly.codingal.com/images/common//partners/ycombinator.webp?optimize=medium&width=195" alt="" />
                    <img className="h-[40px] w-[150px]" src="https://fastly.codingal.com/images/common//partners/rebright.webp?optimize=medium&width=150" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="font-normal font-poppins text-gray-600">Accredited by</h1>
                <div>
                    <img className="h-[40px] w-[100px]" src="https://fastly.codingal.com/images/common//partners/stem-bg-white.webp?optimize=medium&width=114" alt="" />
                </div>
            </div>
        </div>
    )
}