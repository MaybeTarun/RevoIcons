const LinkedinFilled = ({ size = 32, color = "none", fill = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M27 4H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill}/><path d="M15 14v8m-4-8v8m4-4.5a3.5 3.5 0 1 1 7 0V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill="white"/>
  </svg>
)

export default LinkedinFilled
