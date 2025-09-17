const HouseFilled = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#housefilled)"><path d="M28 15v12a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V27a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V15a2 2 0 0 1 .586-1.414l10-10a2 2 0 0 1 2.828 0l10 10A2 2 0 0 1 28 15" fill={color}/></g><defs><clipPath id="housefilled"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default HouseFilled
