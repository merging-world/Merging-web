import { Icon } from 'types/component';

const MoreCircleIcon = (props: Icon) => {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.81 9.69C3.26 9.69 2 10.95 2 12.5C2 14.05 3.26 15.31 4.81 15.31C6.35 15.31 7.60999 14.05 7.60999 12.5C7.60999 10.95 6.35 9.69 4.81 9.69Z"
        fill="#BABFC0"
      />
      <path
        d="M12.0004 15.31C13.5523 15.31 14.8104 14.0519 14.8104 12.5C14.8104 10.9481 13.5523 9.69 12.0004 9.69C10.4485 9.69 9.19043 10.9481 9.19043 12.5C9.19043 14.0519 10.4485 15.31 12.0004 15.31Z"
        fill="#BABFC0"
      />
      <path
        d="M19.1896 9.69C17.6496 9.69 16.3896 10.95 16.3896 12.5C16.3896 14.05 17.6496 15.31 19.1896 15.31C20.7396 15.31 21.9996 14.05 21.9996 12.5C21.9996 10.95 20.7396 9.69 19.1896 9.69Z"
        fill="#BABFC0"
      />
    </svg>
  );
};

export default MoreCircleIcon;
