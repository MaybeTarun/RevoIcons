const DevtoFilled = ({ size = 32, color = "none", fill = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#devtofilled)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M29 8H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" fill={fill} stroke={fill}/><path d="M18 12h-3v8h3m-1-4h-2m6.5-4 2.25 8L26 12M7 12h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7z" stroke={color}/></g><defs><clipPath id="devtofilled"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default DevtoFilled
