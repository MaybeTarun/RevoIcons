const SnapchatFilled = ({ size = 32, color = "none", fill = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#a)" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill}><path d="M20.971 27.93c-1.51.386-3.34-.945-4.971-.945s-3.461 1.331-4.971.945c-1.563-.4-2.316-2.836-3.697-3.595-1.4-.771-4.174-.261-5.332-1.347 0 0 7-2.5 7-12.992a7 7 0 1 1 14 0c0 10.487 7 12.992 7 12.992-1.157 1.086-3.931.576-5.332 1.347-1.38.759-2.134 3.195-3.697 3.595M8.289 15.316 5 14m18.71 1.316L27 14"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
 </svg>
)

export default SnapchatFilled
