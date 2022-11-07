import { Icon } from 'types/Icon';

function ImageIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 25"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M2.364 6a4 4 0 014-4h12a4 4 0 014 4v6.449l-2.246-1.47a4.75 4.75 0 00-5.61.298L9.27 15.562a3.25 3.25 0 01-3.838.204l-3.068-2.008V6zm16.932 6.234l3.068 2.008V18a4 4 0 01-4 4h-12a4 4 0 01-4-4v-2.45l2.247 1.471a4.75 4.75 0 005.61-.298l5.237-4.285a3.25 3.25 0 013.838-.204zM8.864 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ImageIcon;
