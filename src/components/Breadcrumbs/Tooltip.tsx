import { useState, ReactNode } from "react";

interface TooltipProps {
    text: string;
    children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            {children}
            {isHovered && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-md rounded py-1 px-2 w-[210px] text-center">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;


// ========== Example Implementation ================

// <Tooltip text="Click me!">
// <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
//   Hover me
// </button>
// </Tooltip>

// ===================================================