import { Icon } from 'types/Community';

function PencilIcon(props: Icon) {
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
        d="M21.077 3.816a2.787 2.787 0 00-3.941 0l-1.405 1.405 3.941 3.942 1.405-1.405a2.787 2.787 0 000-3.942zm-2.466 6.407l-3.94-3.941-8.99 8.99c-.561.56-.94 1.277-1.088 2.055l-.424 2.229a1 1 0 001.169 1.17l2.228-.425a3.951 3.951 0 002.056-1.088l8.99-8.99z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default PencilIcon;
