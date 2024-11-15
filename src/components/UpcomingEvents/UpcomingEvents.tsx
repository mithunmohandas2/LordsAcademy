import { useEffect, useState } from "react";

function UpcomingEvents() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState<'flyIn' | 'flyOut'>('flyIn'); // Manage both flyIn and flyOut animations

    const events = [
        { date: "December 25, 2024", event: "Christmas Celebration" },
        { date: "January 1, 2025", event: "New Year Celebration" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation('flyOut');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
                setAnimation('flyIn');
            }, 500);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="md:flex text-center justify-center lg:justify-between md:gap-5 mt-2 mb-10 max-w-[900px] mx-auto py-10 md:py-20">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-semibold mb-3 md:mb-0">
                Upcoming Events:
            </h3>
            <h3 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl text-white ${animation === 'flyIn' ? 'animate-flyIn' : 'animate-flyOut'}`}>
                {events[currentIndex].date}
            </h3>
            <h3 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl text-white ${animation === 'flyIn' ? 'animate-flyIn' : 'animate-flyOut'}`}>
                {events[currentIndex].event}
            </h3>
        </div>
    );
}

export default UpcomingEvents;
