import { certificates } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const Certificates = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        <span className="text-purple">Certificates</span>
      </h1>

      <div className="flex flex-wrap justify-center mt-4">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-md shadow-md hover:shadow-lg"
          >
            {/* ✅ FIXED */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-md"
            />

            <h1 className="font-bold text-center mt-2">
              {item.title}
            </h1>

            {/* ✅ FIXED (NO MORE LINK BUG) */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex lg:text-xl md:text-xs text-sm text-purple items-center"
            >
              <p>See Credentials</p>
              <FaLocationArrow className="ms-3" color="#D8789B" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;