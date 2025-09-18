const Folder = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#folder)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M27.111 26H4.923A.925.925 0 0 1 4 25.078V10h23a1 1 0 0 1 1 1v14.111a.89.89 0 0 1-.889.889M4 10V7a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293L16 10"/></g><defs><clipPath id="folder"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Folder
