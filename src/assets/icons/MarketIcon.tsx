import { Icon } from 'types/component';

function MarketIcon(props: Icon) {
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
        d="M20.046 13.34a6.305 6.305 0 01-1.3.14 5.79 5.79 0 01-3.09-.86 5.95 5.95 0 01-6.16 0c-.928.572-2 .87-3.09.86a6.306 6.306 0 01-1.3-.14 5.39 5.39 0 01-1.3-.44l-.23-.11V18a2.81 2.81 0 002.8 2.81h3.39v-4.9a.75.75 0 01.75-.75h4.12a.75.75 0 01.75.75v4.86h3.36a2.81 2.81 0 002.83-2.77v-5.21l-.2.11a5.39 5.39 0 01-1.33.44zM6.096 3.23h2.87v7.93a4.25 4.25 0 01-2.56.84 4.351 4.351 0 01-1.3-.19 3.513 3.513 0 01-.64-.24 2.85 2.85 0 01-.89-.65 3.33 3.33 0 01-.85-3l.58-2.73a2.72 2.72 0 012.79-1.96zM9.966 3.23h5.22v7.88a4.35 4.35 0 01-5.22 0V3.23zM21.576 10.91a2.88 2.88 0 01-.86.64c-.205.1-.42.181-.64.24-.42.129-.86.193-1.3.19a4.25 4.25 0 01-2.56-.82V3.23h2.87a2.72 2.72 0 012.76 1.94l.58 2.7a.413.413 0 010 .11 3.28 3.28 0 01-.85 2.93z"
      ></path>
    </svg>
  );
}

export default MarketIcon;