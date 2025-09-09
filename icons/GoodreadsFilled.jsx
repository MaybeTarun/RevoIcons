const GoodreadsFilled = ({ size = 32, color = "none", fill = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#goodreadsfilled)"><path d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3 17a6 6 0 0 1-10.8 3.6 1 1 0 0 1 1.6-1.2A4 4 0 0 0 20 20v-1.532A6 6 0 0 1 10 14v-1a6 6 0 0 1 10-4.467V8a1 1 0 0 1 2 0zm-2-7v1a4 4 0 1 1-8 0v-1a4 4 0 1 1 8 0" fill={fill}/></g><defs><clipPath id="goodreadsfilled"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default GoodreadsFilled
