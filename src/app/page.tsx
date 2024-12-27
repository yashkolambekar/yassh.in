import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center p-4">
      <div >
        <p className="text-[1.5em]">Yash Kolambekar</p>
        <p className="opacity-60">Full stack developer & tech enthusiast</p>
        <div className="opacity-60 flex flex-col gap-2 mt-8">
          <p>
            Blog:{" "}
            <Link target="_blank" href={"https://blog.yassh.in"}>https://blog.yassh.in</Link>
          </p>
          <p>
            Resume:{" "}
            <Link target="_blank" href={"https://raw.githubusercontent.com/yashkolambekar/cv/refs/heads/main/resume.pdf"}>yashkolambekar/cv</Link>
          </p>
          <p>
            Socials:{" "}
            <div className="inline-flex gap-2 flex-wrap">
              <Link target="_blank" href={"https://github.com/yashkolambekar"}>github</Link>

              <Link target="_blank" href={"https://twitter.com/yassh_in"}>twitter</Link>

              <Link target="_blank" href={"https://linkedin.com/in/yashkolambekar"}>
                linkedin
              </Link>

              <Link target="_blank" href={"mailto:hi@yassh.in"}>email</Link>

              <Link target="_blank" href={"https://instagram.com/classicaf"}>instagram</Link>
            </div>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
