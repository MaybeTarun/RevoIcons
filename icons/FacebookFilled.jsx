const FacebookFilled = ({ size = 32, color = "none", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#facebookfilled)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12" fill={color} stroke={color}/><path d="M21 11h-2a3 3 0 0 0-3 3v14m-4-10h8"/></g><defs><clipPath id="facebookfilled"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default FacebookFilled
