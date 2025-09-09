const Behance = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21 10h8M4 15.5h7.75a4.25 4.25 0 0 1 0 8.5H4V8h7.25a3.75 3.75 0 0 1 0 7.5M29 22a5 5 0 1 1 1-3H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default Behance
