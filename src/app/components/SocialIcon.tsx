import React from "react";

interface SocialIconProps {
    href?: string; // href for regular social icons (optional for the CallIcon)
    icon: React.ComponentType; // The component for the icon (LinkedInIcon, GithubIcon, etc.)
    bgColor: string; // Background color for the icon
    hoverColor: string; // Hover color for the icon
    ariaLabel: string; // Aria label for accessibility
    onClick?: () => void; // onClick handler, used for the CallIcon (optional)
    isCallIcon?: boolean; // Special case for the CallIcon (optional)
    tooltipVisible?: boolean; // Whether tooltip is visible (used for CallIcon)
    isLightMode?: boolean; // Whether the theme is light mode (used for tooltip styling)
}

const SocialIcon: React.FC<SocialIconProps> = ({
    href,
    icon: Icon,
    bgColor,
    hoverColor,
    ariaLabel,
    onClick,
    isCallIcon = false,
    tooltipVisible,
    isLightMode
}) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    if (isCallIcon) {
        return (
            <div
                className={`group flex items-center justify-center relative cursor-pointer`}
                aria-label={ariaLabel}
                onClick={handleClick}
            >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor} ${hoverColor} transition duration-300`}>
                    <Icon />
                </div>
                {tooltipVisible && (
                    <div
                        className={`absolute top-20 lg:top-1/2 lg:left-full lg:ml-2 transform -translate-y-1/2 px-3 py-3 w-max text-xs font-medium 
                            ${isLightMode ? "text-white bg-gray-700" : "text-black bg-gray-200"} rounded-lg shadow-lg`}>
                        <span className="block w-full text-center">
                            Copied to clipboard!
                        </span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            aria-label={ariaLabel}
        >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor} ${hoverColor} transition duration-300`}>
                <Icon />
            </div>
        </a>
    );
};

export default SocialIcon;
