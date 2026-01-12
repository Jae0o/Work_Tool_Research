import type { IconCommonProps } from "../icon.type";

const SubmitIcon = ({ size = "1.6rem", ...props }: Omit<IconCommonProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="#AE6EDE" />
      <path
        d="M12.2063 4.98978L10.7152 12.0221C10.6027 12.5185 10.3093 12.642 9.89237 12.4082L7.62031 10.7339L6.52399 11.7883C6.40267 11.9096 6.3012 12.0111 6.06737 12.0111L6.23061 9.69713L10.4416 5.89198C10.6247 5.72875 10.4019 5.63831 10.1571 5.80154L4.9512 9.07948L2.71002 8.37801C2.22252 8.22581 2.2137 7.89051 2.81149 7.65669L11.5777 4.27948C11.9836 4.12728 12.3387 4.36992 12.2063 4.98978Z"
        fill="white"
      />
    </svg>
  );
};

export default SubmitIcon;
