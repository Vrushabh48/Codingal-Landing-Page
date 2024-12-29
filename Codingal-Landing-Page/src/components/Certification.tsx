export const Certification = () => {
    return(
        <div className="lg:ml-[200px] lg:mr-[200px]">
            <div className="flex justify-between">
                <img src="https://fastly.codingal.com/images/home/round-arrow.webp?optimize=medium&width=100" alt="" />
                <h1 className="lg:text-3xl font-poppins text-xl mt-7">Earn <span className="underline decoration-yellow-500">coding certifications</span> that make you stand out</h1>
                <img src="https://fastly.codingal.com/images/home/certificate.webp?optimize=medium&width=100" alt="" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 mb-12">
                <div>
                    <img className="w-[438px] h-[375px]" src="https://fastly.codingal.com/images/home/student-certificate.webp?optimize=medium&width=438" alt="" />
                </div>
                <div className="font-poppins text-lg lg:col-span-2 pl-10">
                    <p>Our young learners from grades 1-12 earn STEM.org-accredited coding certificates that celebrate their achievements while unlocking special badges and leaderboard rankings, making programming a fun and rewarding experience. Our curriculum allows students to earn a variety of certifications, including specializations like Young Scratch Developer, Young Python Programmer, Young Web Developer, Young AI Programmer, Advanced AI Programmer, Java Developer, AP Computer Science A Champion, and Coding Champion. For those looking to dive deeper, students can enroll in advanced courses and earn certifications such as Coding Grandmaster and Coding Prodigy. These certifications are easy to download and share, are STEM.org accredited, and can be added to your child's learning portfolio for sharing with the world and on social media.</p>
                </div>
            </div>
        </div>
    )
}