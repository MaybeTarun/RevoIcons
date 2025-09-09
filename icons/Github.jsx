const Github = ({ size = 32, color = "black", fill = "none", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#github)" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.979 7A6.5 6.5 0 0 0 9.5 4a6.49 6.49 0 0 0-.436 5.588A6.16 6.16 0 0 0 8 13v1a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6v-1a6.16 6.16 0 0 0-1.064-3.412A6.5 6.5 0 0 0 24.5 4a6.5 6.5 0 0 0-5.479 3z"/><path d="M13 29v-5a4 4 0 1 1 8 0v5m-8-3H9a4 4 0 0 1-4-4 4 4 0 0 0-4-4"/></g><defs><clipPath id="github"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Github
