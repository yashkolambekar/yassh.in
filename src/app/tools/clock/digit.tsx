interface DigitProps {
    char: string;
}

const Digit = (props: DigitProps) => {
    const angles: { [key: string]: [number, number] } = {
        "┌": [90, 180],
        "┐": [-90, 180],
        "└": [90, 0],
        "┘": [-90, 0],
        "-": [90, 90],
        "|": [180, 0],
    };

    const nums: { [key: string]: string[][] } = {
        "0": [
            ["┌", "-", "-", "┐"],
            ["|", "┌", "┐", "|"],
            ["|", "|", "|", "|"],
            ["|", "|", "|", "|"],
            ["|", "└", "┘", "|"],
            ["└", "-", "-", "┘"],
        ],
        "1": [
            ["┌", "-", "┐", ""],
            ["└", "┐", "|", ""],
            ["", "|", "|", ""],
            ["", "|", "|", ""],
            ["┌", "┘", "└", "┐"],
            ["└", "-", "-", "┘"],
        ],
        "2": [
            ["┌", "-", "-", "┐"],
            ["└", "-", "┐", "|"],
            ["┌", "-", "┘", "|"],
            ["|", "┌", "-", "┘"],
            ["|", "└", "-", "┐"],
            ["└", "-", "-", "┘"],
        ],
        "3": [
            ["┌", "-", "-", "┐"],
            ["└", "-", "┐", "|"],
            ["", "┌", "┘", "|"],
            ["", "└", "┐", "|"],
            ["┌", "-", "┘", "|"],
            ["└", "-", "-", "┘"],
        ],
        "4": [
            ["┌", "┐", "┌", "┐"],
            ["|", "|", "|", "|"],
            ["|", "└", "┘", "|"],
            ["└", "-", "┐", "|"],
            ["", "", "|", "|"],
            ["", "", "└", "┘"],
        ],
        "5": [
            ["┌", "-", "-", "┐"],
            ["|", "┌", "-", "┘"],
            ["|", "└", "-", "┐"],
            ["└", "-", "┐", "|"],
            ["┌", "-", "┘", "|"],
            ["└", "-", "-", "┘"],
        ],
        "6": [
            ["┌", "-", "-", "┐"],
            ["|", "┌", "-", "┘"],
            ["|", "└", "-", "┐"],
            ["|", "┌", "┐", "|"],
            ["|", "└", "┘", "|"],
            ["└", "-", "-", "┘"],
        ],
        "7": [
            ["┌", "-", "-", "┐"],
            ["└", "-", "┐", "|"],
            ["", "", "|", "|"],
            ["", "", "|", "|"],
            ["", "", "|", "|"],
            ["", "", "└", "┘"],
        ],
        "8": [
            ["┌", "-", "-", "┐"],
            ["|", "┌", "┐", "|"],
            ["|", "└", "┘", "|"],
            ["|", "┌", "┐", "|"],
            ["|", "└", "┘", "|"],
            ["└", "-", "-", "┘"],
        ],
        "9": [
            ["┌", "-", "-", "┐"],
            ["|", "┌", "┐", "|"],
            ["|", "└", "┘", "|"],
            ["└", "-", "┐", "|"],
            ["┌", "-", "┘", "|"],
            ["└", "-", "-", "┘"],
        ],
    };

    const getAngle = (char: string) => {
        return angles[char] || [225, 135];
    };

    return (
        <div>
            {nums[props.char]?.map((row, rowIdx) => (
                <div className='flex flex-row' key={rowIdx}>
                    {row.map((col, colIdx) => {
                        const [rotate1, rotate2] = getAngle(col);
                        return (
                            <div
                                className='h-[4em] w-[4em] bg-[rgba(0,0,0,0.05)] border-[0.1em] border-[rgba(255,255,255,0.1)] flex items-center justify-center rounded-full relative'
                                key={colIdx}
                            >
                                <div
                                    className={`absolute left-1/2 top-0 h-[50%] w-[0.3em] bg-white origin-bottom -translate-x-1/2 -translate-y-full transition-all duration-900 ease rounded-full`}
                                    style={{ transform: `rotate(${rotate1}deg)` }}
                                />
                                <div
                                    className={`absolute left-1/2 top-0 h-[50%] w-[0.3em] bg-white origin-bottom -translate-x-1/2 -translate-y-full transition-all duration-900 ease rounded-full`}
                                    style={{ transform: `rotate(-${rotate2}deg)` }}
                                />
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Digit;