import { Icon } from 'types/component';

function GooglePlayIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 200 200"
    >
      <path
        fill="url(#paint0_linear_2811_43943)"
        d="M48.25 39.943a9.651 9.651 0 00-2.233 6.759v106.611a9.73 9.73 0 002.234 6.759l.365.365 59.915-59.742v-1.416l-59.915-59.7-.365.364z"
      ></path>
      <path
        fill="url(#paint1_linear_2811_43943)"
        d="M128.516 120.609l-19.985-19.914v-1.416l19.985-19.873.447.242 23.681 13.398c6.784 3.804 6.784 10.078 0 13.923l-23.681 13.397-.447.243z"
      ></path>
      <path
        fill="url(#paint2_linear_2811_43943)"
        d="M128.963 120.366l-20.31-20.237-60.402 59.943a8.149 8.149 0 009.952.284l70.638-39.99"
      ></path>
      <path
        fill="url(#paint3_linear_2811_43943)"
        d="M128.963 79.648l-70.76-40.03a7.858 7.858 0 00-9.952.325l60.28 60.064 20.432-20.359z"
      ></path>
      <path
        fill="#000"
        d="M128.516 119.921l-70.313 39.747a8.145 8.145 0 01-9.709 0l-.365.364.366.364A8.14 8.14 0 0053.349 162a8.14 8.14 0 004.854-1.604l70.638-39.989-.325-.486z"
        opacity="0.1"
      ></path>
      <path
        fill="#000"
        d="M48.25 159.425a9.813 9.813 0 01-2.234-6.8v.688a9.73 9.73 0 002.235 6.759l.365-.364-.365-.283zM152.644 106.241l-24.128 13.68.447.445 23.681-13.559a8.57 8.57 0 003.484-2.797 8.52 8.52 0 001.594-4.165 8.928 8.928 0 01-1.765 3.808 8.973 8.973 0 01-3.313 2.588z"
        opacity="0.07"
      ></path>
      <path
        fill="#fff"
        d="M58.203 40.347l94.442 53.387a8.938 8.938 0 013.292 2.532 8.886 8.886 0 011.785 3.741 8.444 8.444 0 00-1.584-4.172 8.482 8.482 0 00-3.493-2.79L58.203 39.62c-6.662-3.805-12.186-.648-12.186 7.083v.688c0-7.69 5.524-10.888 12.186-7.043z"
        opacity="0.3"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2811_43943"
          x1="103.25"
          x2="22.341"
          y1="45.569"
          y2="126.768"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008EFF"></stop>
          <stop offset="0.01" stopColor="#008FFF"></stop>
          <stop offset="0.26" stopColor="#00ACFF"></stop>
          <stop offset="0.51" stopColor="#00C0FF"></stop>
          <stop offset="0.76" stopColor="#00CDFF"></stop>
          <stop offset="1" stopColor="#00D1FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2811_43943"
          x1="153.457"
          x2="36.389"
          y1="100.007"
          y2="100.007"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD800"></stop>
          <stop offset="1" stopColor="#FF8A00"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_2811_43943"
          x1="117.874"
          x2="8.187"
          y1="111.057"
          y2="221.137"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44"></stop>
          <stop offset="1" stopColor="#B11162"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_2811_43943"
          x1="33.059"
          x2="82.074"
          y1="4.446"
          y2="53.596"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#328E71"></stop>
          <stop offset="0.07" stopColor="#2D9571"></stop>
          <stop offset="0.48" stopColor="#15BD74"></stop>
          <stop offset="0.8" stopColor="#06D575"></stop>
          <stop offset="1" stopColor="#00DE76"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GooglePlayIcon;
