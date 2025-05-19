import Image from "next/image";
import { posts } from "./posts";

const BlogPost = () => {
  return (
    <div>
      <p className="text-[1.5em] font-semibold opacity-75">Latest Blog Posts</p>
      <div className="mt-[2em]">
        {posts.map((item, index) => {
          return (
            <div className="mt-[1em] opacity-75 hover:opacity-100 cursor-pointer">
              <p className="text-[1.2em] w-[70%] " >{item.title}</p>
              <p className="opacity-40">{item.date}</p>
            </div>
          );
        })}
        <div className="mt-[1em] flex items-center gap-[0.2em] opacity-50 hover:opacity-100 cursor-pointer w-fit pr-[5em]">
              <p className="text-[1.2em]" >View all</p>
              <Image src={"/icons/open-external-svgrepo-com.svg"} width={20} height={20} alt="" className="h-[1.5em] w-auto hover:opacity-100"/>
            </div>
      </div>
    </div>
  );
};

export default BlogPost;
