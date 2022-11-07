import { Icon } from 'types/Icon';

function CheckRectangleIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M15 1.667H5A3.333 3.333 0 001.667 5v10A3.333 3.333 0 005 18.333h10A3.333 3.333 0 0018.333 15V5A3.333 3.333 0 0015 1.667zm-1.173 6.217a.625.625 0 00-.987-.768L9.5 11.41a.208.208 0 01-.303.027l-2.112-1.9a.625.625 0 00-.836.928l2.112 1.902c.63.566 1.607.48 2.127-.19l3.339-4.292z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CheckRectangleIcon;
