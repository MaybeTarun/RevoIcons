const ArrowUpRight = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#arrowupright)" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 24 24 8M11 8h13v13"/></g><defs><clipPath id="arrowupright"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default ArrowUpRight
