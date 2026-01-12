import type { IconCommonProps } from "../icon.type";

const ActivityIcon = ({ size = "1.5rem", fill = "none", stroke = "currentColor", ...props }: IconCommonProps & { stroke?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill={fill}
      {...props}
    >
      <path
        d="M13.75 7.5H11.25L9.375 13.125L5.625 1.875L3.75 7.5H1.25"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ActivityIcon;
