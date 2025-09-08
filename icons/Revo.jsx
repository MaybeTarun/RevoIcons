const Revo = ({ size = 32, color = "black", fill = "none", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#revo-revo)">
      <circle cx="250" cy="250" r="225" fill={fill} stroke={color} strokeWidth="50" />
      <path d="M247 347L362.5 222.5M362.5 222.5H265M362.5 222.5V317.5" stroke={color} strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="revo-revo">
        <rect width="500" height="500" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default Revo
