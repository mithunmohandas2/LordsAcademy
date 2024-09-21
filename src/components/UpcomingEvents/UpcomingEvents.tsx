import { useEffect, useState } from "react";

function UpcomingEvents() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState<'flyIn' | 'flyOut'>('flyIn');

    // add or delete the upcoming events in the below format
    const events = [
        { date: "September 12, 2024", event: "Annual Meet" },
        { date: "September 13, 2024", event: "Sports Competition" },
        { date: "September 14, 2024", event: "Onam Celebration" },
        { date: "October 15, 2024", event: "Youth Festival" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimation('flyOut');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
                setAnimation('flyIn');
            }, 500);
        }, 7000);

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
