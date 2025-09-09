const SoundcloudFilled = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#soundcloudfilled)"><path d="M3 15v6a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0m3-4a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V12a1 1 0 0 0-1-1m4-1a1 1 0 0 0-1 1v13a1 1 0 1 0 2 0V11a1 1 0 0 0-1-1m4-4a1 1 0 0 0-1 1v17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m13.855 7.293A10 10 0 0 0 18 5h-.5a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h8.401c3.198 0 5.909-2.465 6.089-5.657a6.01 6.01 0 0 0-4.135-6.05" fill={color}/></g><defs><clipPath id="soundcloudfilled"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default SoundcloudFilled
