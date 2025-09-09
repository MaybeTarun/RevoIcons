const Threads = ({ size = 32, color = "black", fill = "none", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#threads)"><path d="M24 9.706C22.733 6.411 20.071 4 15 4 7 4 5 10 5 16s2 12 10 12c6 0 9-4 9-7 0-8-13-8-13-2 0 5 9 5 9-3 0-7-7-7-9-4" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="threads"><path fill="#fff" d="M-1 0h32v32H-1z"/></clipPath></defs>
  </svg>
)

export default Threads
