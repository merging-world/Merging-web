import { Icon } from 'types/Community';

function CommunityIcon(props: Icon) {
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
      <path fill={props.color} d="M11.6 11.17l3.12-1.41-1.38 3.07-3.15 1.49 1.41-3.15z"></path>
      <path
        fill={props.color}
        d="M12.47 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm3.7 8.17l-1.51 3.32c-.14.31-.39.56-.7.7l-3.32 1.51a1.424 1.424 0 01-1.59-.28c-.42-.42-.53-1.05-.28-1.59l1.51-3.32c.14-.31.39-.56.7-.7L14.3 8.3c.54-.25 1.17-.14 1.59.28.42.42.53 1.05.28 1.59z"
      ></path>
    </svg>
  );
}

export default CommunityIcon;
