const House = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#house)"><path d="M13 27v-8h6v8h8V15a1 1 0 0 0-.293-.707l-10-10a1 1 0 0 0-1.415 0l-10 10A1 1 0 0 0 5 15v12z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="house"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default House
