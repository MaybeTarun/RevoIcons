const Envelope = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#envelope)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M28 7 16 18 4 7"/><path d="M4 7h24v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm9.819 9-9.51 8.718m23.383 0L18.182 16"/></g><defs><clipPath id="envelope"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Envelope
