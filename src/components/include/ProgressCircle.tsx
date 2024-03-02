import { useEffect, useState } from 'react';

interface ProgressCircleProps {
    progressValue: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progressValue }) => {
    const [offset, setOffset] = useState(0);

    const radius = 50;
    const strokeWidth = 11;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progressValue) / 100) * circumference;
        setOffset(progressOffset);
    }, [progressValue, circumference]);

    return (
        <div className="relative w-32 h-32">
            <svg className="w-full h-full">
                <circle
                    className="text-primaryBlue"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primaryWhite">{progressValue}%</span>
        </div>
    );
};

export default ProgressCircle;
