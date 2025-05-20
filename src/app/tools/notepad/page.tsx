"use client";

import { useNotePadStore } from "./store";

const NotePad = () => {

    const { content, setContent } = useNotePadStore();

    return (
        <>
            <div className="flex flex-col w-full h-full p-[2em] items-center">
                <div className="w-full max-w-[50em]">
                <p>NotePad</p>
                <div className="">
                    <textarea
                        className="w-full h-[30em] bg-[rgba(255,255,255,0.04)] mt-[1em] rounded-lg p-4 font-mono"
                        placeholder="Type your notes here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                </div>
            </div>
        </>
    )
}

export default NotePad;