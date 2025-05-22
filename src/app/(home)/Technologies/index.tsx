import Image from "next/image";
import { tech } from "./tech";

const Technologies = () => {
  return (
    <div className="mt-[4em]">
      <p className="text-[1.5em] font-semibold opacity-75">Technologies</p>
      <div className="mt-[2em] flex gap-[0.7em] flex-wrap">
        {tech.map((item, index) => {
          return (
            <div key={item.title} className="group flex items-center justify-center px-[1.2em] py-[0.6em] bg-[rgba(255,255,255,0.025)] rounded-xl border-[0.15em] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-200 ease-in-out">
              <Image
                key={index}
                src={item.image}
                width={50}
                height={50}
                alt=""
                className="saturate-0 group-hover:saturate-100 h-[1.5em] w-auto mr-[0.5em] transition-all duration-200"
              />
              <p className="cursor-default">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Technologies };
