import Image from "next/image";
import { tech } from "./tech";

const Technologies = () => {
  return (
    <div className="mt-[4em]">
      <p className="text-[1.5em] font-semibold opacity-75">Technologies</p>
      <div className="mt-[2em] flex gap-[0.7em]">
        {tech.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.image}
              width={200}
              height={200}
              alt=""
              className="saturate-0 hover:saturate-100 h-[3em] w-auto"
            />
          );
        })}
      </div>
    </div>
  );
};

export { Technologies };
