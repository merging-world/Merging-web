import { Icon } from 'types/component';

function BookMarkIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.25 2H7.75C6.23 2 5 3.23 5 4.75V20.24C5 20.94 5.39999 21.56 6.03999 21.84C6.67999 22.12 7.4 22.01 7.92 21.54C8.4 21.11 8.88 20.67 9.37 20.22C10.19 19.46 11.02 18.71 11.84 18C11.93 17.92 12.06 17.92 12.15 18C12.97 18.71 13.79 19.46 14.61 20.21C15.1 20.66 15.59 21.11 16.09 21.55C16.42 21.84 16.83 22 17.25 22C17.49 22 17.74 21.95 17.97 21.84C18.61 21.55 19.01 20.94 19.01 20.24V4.74001C19 3.23001 17.77 2 16.25 2Z"
        fill={props.color}
      />
    </svg>
  );
}

export default BookMarkIcon;
