const Infinity = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<g clipPath="url(#infinity)"><path d="m13.329 19.016-1.086 1.227a6 6 0 1 1 0-8.485l7.515 8.485a6 6 0 1 0 0-8.485l-1.086 1.226" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="infinity"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Infinity
