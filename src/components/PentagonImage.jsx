import React from "react";

export default function RoundedPentagonImage({ src, alt = "Profile" }) {
    return (
        <svg
            viewBox="0 0 200 200"
            className="w-64 h-64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="roundedPentagon" clipPathUnits="userSpaceOnUse">
                    <path
                        d="M100 0
               C105 0, 180 60, 190 80
               C175 180, 25 180, 10 80
               C20 60, 95 0, 100 0
               Z"
                    />
                </clipPath>
            </defs>
            <image
                href={src}
                width="200"
                height="200"
                clipPath="url(#roundedPentagon)"
                preserveAspectRatio="xMidYMid slice"
            />
        </svg>
    );
}
