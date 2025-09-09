const InstagramFilled = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#instagramfilled)"><path d="M20 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0m9-6v12a7.01 7.01 0 0 1-7 7H10a7.01 7.01 0 0 1-7-7V10a7.007 7.007 0 0 1 7-7h12a7.01 7.01 0 0 1 7 7m-7 6a6 6 0 1 0-6 6 6.006 6.006 0 0 0 6-6m3-7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" fill={color}/></g><defs><clipPath id="instagramfilled"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
 </svg>
)

export default InstagramFilled
