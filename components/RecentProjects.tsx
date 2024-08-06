import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {" "}
        <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-20">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32rem] h-[25rem] lg:w-[28rem] w-[80vw] flex items-center justify-center sm:w-96"
            key={item.id}
          >
            <Link target="blank" title={item.title} href={item.link} className="p-4" style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(15, 10, 15)",
              backgroundColor:
                "linear-gradient(90deg, rgba(50, 30, 50, 1) 0%, rgba(70, 40, 70, 1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <p className="text-white">{item.link}</p>
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base text-purple">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-3 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Source Code
                  </p>
                  <FaLocationArrow className="ms-3" color="#D8789B" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;