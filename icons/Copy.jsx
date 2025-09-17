const Copy = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#copy)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 9H5v18h18z"/><path d="M9 5h18v18"/></g><defs><clipPath id="copy"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Copy
