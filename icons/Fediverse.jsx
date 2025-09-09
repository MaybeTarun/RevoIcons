const Fediverse = ({ size = 32, color = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#fediverse)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m8 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-7 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M7 25.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M6.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m18.658 4.61-4.315 6.78m-.781-16.938 4.877 6.095M8.809 9.539 16.19 6.46m7.813 9.159-8.003.38M16 16l1.921-8.067m-9.257 3.819L16 16m0 0 2.709 8.128m-1.617 1.698-7.685-2.152m-.433-2.209L16 16m-9.1 4.503-.3-7.505"/></g><defs><clipPath id="fediverse"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs>
  </svg>
)

export default Fediverse
