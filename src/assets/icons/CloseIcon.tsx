import { Icon } from 'types/Icon';

function CloseIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 14"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M11.607 13.02a1 1 0 001.414-1.413l-4.95-4.95 4.95-4.95A1 1 0 0011.606.293l-4.95 4.95L1.708.293A1 1 0 00.293 1.707l4.95 4.95-4.95 4.95a1 1 0 101.414 1.414l4.95-4.95 4.95 4.95z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CloseIcon;
