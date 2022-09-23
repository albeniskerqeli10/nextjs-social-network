import { IconContext } from "@react-icons/all-files";
import clsx from "clsx";
const sizes = {
    base: "py-2 px-4 text-base font-medium",
    xs: "py-2 px-3 text-xs font-normal",
    sm: "py-2 px-4 text-sm",
    md: "py-2 px-6 text-md",
    lg: "py-3 px-8 text-lg",
    fluid: "py-2 px-6 text-md flex-1",
};
const Button = ({
    title,
    margin,
    borderColor,
    rounded,
    iconColor,
    iconSize,
    bgColor,
    textColor,
    icon,
    hover,
    size,
    ...rest
}) => {
    return (
        <button
            className={clsx(
                `${bgColor || "transparent"
                }  shadow-box inline-flex w-auto  flex-row flex-wrap items-center justify-center  m-${margin || "2"
                } mx-1  font-inter hover:bg-${hover}    gap-2  rounded-${rounded || "sm"
                } 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}
    
    `,
                size && sizes[size]
            )}
            {...rest}
        >
            {title && (
                <span className={`text-${textColor || "black"} text-md`}>{title}</span>
            )}
            {icon && (
                <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
                    <i>{icon}</i>
                </IconContext.Provider>
            )}
        </button>
    );
};
export default Button;