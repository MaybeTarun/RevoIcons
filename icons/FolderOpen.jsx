const FolderOpen = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#folderopen)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 26V8a1 1 0 0 1 1-1h6.666a1 1 0 0 1 .6.2L16 10h9a1 1 0 0 1 1 1v3"/><path d="m4 26 3.773-11.316A1 1 0 0 1 8.72 14H29a1 1 0 0 1 .949 1.316L26.386 26z"/></g><defs><clipPath id="folderopen"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default FolderOpen
