import { useEffect, useState } from 'react';

interface ProgressCircleProps {
    progressValue: number;
    parameterStr: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progressValue, parameterStr }) => {

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
            <svg className="w-full h-full rotate-0">
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
            <div className="absolute inset-x-0 bottom-1 flex flex-col gap-y-2 items-center justify-center bg-darkPurple rounded-lg p-2">
                <span className="text-sm whitespace-nowrap lg:text-base font-bold text-baseGray">
                    {progressValue}%
                </span>
                <span className="text-xs whitespace-nowrap lg:text-sm text-baseGray">
                    Based on {parameterStr}
                </span>
            </div>
        </div>
    );
};

export default ProgressCircle;
