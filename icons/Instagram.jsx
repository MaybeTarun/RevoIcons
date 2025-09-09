const Instagram = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
  <g clipPath="url(#instagram)"><path d="M22 4H10a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V10a6 6 0 0 0-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke={color} strokeWidth="2" stroke-miterlimit="10"/><path d="M22.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill={color}/></g><defs><clipPath id="instagram"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
 </svg>
)

export default Instagram
