const Goodreads = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#goodreads)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11a7 7 0 1 1 14 0v3a7 7 0 1 1-14 0z"/><path d="M23 4v17a7 7 0 0 1-7 7c-2.375 0-4.735-1.186-6-3"/></g><defs><clipPath id="goodreads"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Goodreads
