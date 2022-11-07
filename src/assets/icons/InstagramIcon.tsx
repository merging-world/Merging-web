import { Icon } from 'types/component';

function InstagramIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        d="M20 24.7c2.584 0 4.7-2.117 4.7-4.7s-2.116-4.7-4.7-4.7a4.716 4.716 0 00-4.7 4.7c0 2.583 2.117 4.7 4.7 4.7z"
      ></path>
      <path
        fill={props.color}
        d="M28.567 3.333H11.433c-4.466 0-8.1 3.634-8.1 8.1v17.134c0 4.466 3.634 8.1 8.1 8.1h17.134c4.466 0 8.1-3.634 8.1-8.1V11.433c0-4.466-3.634-8.1-8.1-8.1zm.017 9.85a1.71 1.71 0 01-1.717-1.7c0-.95.767-1.716 1.716-1.716a1.707 1.707 0 010 3.417zM20 12.8c3.967 0 7.2 3.233 7.2 7.2s-3.233 7.2-7.2 7.2c-3.966 0-7.2-3.233-7.2-7.2s3.233-7.2 7.2-7.2z"
      ></path>
    </svg>
  );
}

export default InstagramIcon;
