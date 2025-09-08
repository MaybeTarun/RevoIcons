const Behance = ({ size = 32, color = "black", fill = "none", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#revo-behance)">
      <path d="M21 10H29" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 15.5H11.75C12.8772 15.5 13.9582 15.9478 14.7552 16.7448C15.5522 17.5418 16 18.6228 16 19.75C16 20.8772 15.5522 21.9582 14.7552 22.7552C13.9582 23.5522 12.8772 24 11.75 24H4V8H11.25C12.2446 8 13.1984 8.39509 13.9017 9.09835C14.6049 9.80161 15 10.7554 15 11.75C15 12.7446 14.6049 13.6984 13.9017 14.4017C13.1984 15.1049 12.2446 15.5 11.25 15.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 22C28.2876 22.9498 27.2606 23.6151 26.1025 23.8769C24.9445 24.1387 23.7311 23.9799 22.6795 23.4289C21.6278 22.8779 20.8066 21.9706 20.3627 20.8695C19.9187 19.7684 19.8811 18.5452 20.2566 17.4189C20.632 16.2925 21.396 15.3366 22.4118 14.722C23.4276 14.1074 24.629 13.8744 25.8009 14.0646C26.9728 14.2548 28.0388 14.8557 28.8082 15.76C29.5775 16.6642 30 17.8128 30 19H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="revo-behance">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export default Behance
