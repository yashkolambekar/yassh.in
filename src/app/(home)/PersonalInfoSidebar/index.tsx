import Image from "next/image";
import { socialMedia } from "./config";

const PersonalInfoSidebar = () => {

    return (
        <div className="w-[15em] flex-shrink-0">
            <div className="w-full h-[18em] rounded-[1em] overflow-clip">
              <Image src={"/images/yashcropped.jpeg"} width={1000} height={1000} alt=""
              className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-[1em] p-[0.5em]">
              <p className="leading-[1em] text-[1.5em] font-bold">Yash Kolambekar</p>
              <p className="leading-[1em] mt-[0.3em] opacity-60">Software Engineer </p>
            <div className="flex gap-[0.8em]">
                {
                  socialMedia.map((item, index) => {
                    return (
                      <a href={item.link} target="_blank" key={index} className="flex items-center gap-[0.5em] mt-[1em] opacity-50 hover:opacity-100">
                        <Image src={item.icon} width={20} height={20} alt="" className="h-[1.5em] w-auto "/>
                        </a>
                    )
                  })
                }
            </div>
            </div>
          </div>
    )
}

export default PersonalInfoSidebar;