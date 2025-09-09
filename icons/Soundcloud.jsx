const Soundcloud = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#soundcloud)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15v6m4-9v12m4-13v13m4-17v17m4 0h8a5 5 0 0 0 .955-9.909A9 9 0 0 0 18 6"/></g><defs><clipPath id="soundcloud"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Soundcloud
