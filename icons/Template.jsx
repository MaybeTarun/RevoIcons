const Revo = ({ size = 32, color = "currentColor", fill = "none", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g clipPath="url(#clip0_2008_57)">
      <circle cx="250" cy="250" r="225" fill={fill} stroke="currentColor" strokeWidth="50" />
      <path d="M247 347L362.5 222.5M362.5 222.5H265M362.5 222.5V317.5" stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_2008_57">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default Revo
