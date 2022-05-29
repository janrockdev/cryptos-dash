interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ArrowDownIcon = ({ className, style }: Props) => {
  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 25.93 25.93"
    >
      <g>
        <g id="c118_triangle">
          <path
            d="M25.397,4.554h-2.042l-9.974,12.644c-0.101,0.124-0.256,0.197-0.416,0.197c-0.164,0-0.315-0.073-0.419-0.197L2.575,4.554
						H0.532c-0.206,0-0.392,0.115-0.479,0.299c-0.09,0.184-0.064,0.403,0.06,0.561l12.435,15.762c0.104,0.125,0.255,0.2,0.419,0.2
						c0.16,0,0.315-0.075,0.416-0.2L25.816,5.413c0.128-0.157,0.148-0.377,0.058-0.561C25.789,4.669,25.601,4.554,25.397,4.554z"
          />
        </g>
      </g>
    </svg>
  );
};
