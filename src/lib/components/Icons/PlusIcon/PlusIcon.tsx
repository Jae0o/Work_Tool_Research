import type { IconCommonProps } from "../icon.type";

const PlusIcon = ({
  size = "1.5rem",
  fill = "none",
  stroke = "currentColor",
  ...props
}: IconCommonProps & { stroke?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      {...props}
    >
      <path
        d="M12 5V19M5 12H19"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
