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
    <g>
      <circle cx="250" cy="250" r="225" fill={fill} stroke="currentColor" strokeWidth="50" />
      <path d="M247 347L362.5 222.5M362.5 222.5H265M362.5 222.5V317.5" stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

export default Revo
