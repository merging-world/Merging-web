import { Icon } from 'types/Community';

function AlarmIcon(props: Icon) {
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
        d="M12.788 3C9.56 3 6.842 5.49 6.468 8.794l-.345 3.044a3.816 3.816 0 01-.88 2.042C4.21 15.096 5.05 17 6.619 17h12.34c1.57 0 2.408-1.904 1.375-3.12a3.816 3.816 0 01-.88-2.042l-.345-3.044C18.734 5.491 16.018 3 12.788 3zm2.972 16.072C15.303 20.198 14.145 21 12.788 21c-1.356 0-2.515-.8-2.972-1.928a.423.423 0 01.395-.572h5.154a.423.423 0 01.395.572z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default AlarmIcon;
