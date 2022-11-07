import { Icon } from 'types/Community';

function InformationIcon(props: Icon) {
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
        d="M10 1.667c-4.592 0-8.333 3.741-8.333 8.333 0 4.592 3.741 8.333 8.333 8.333 4.592 0 8.333-3.741 8.333-8.333 0-4.592-3.741-8.333-8.333-8.333zm0 5.9a.624.624 0 11.625-.625c0 .35-.275.625-.625.625zm.625 5.416a.624.624 0 11-1.25 0V9.1a.624.624 0 111.25 0v3.883z"
      ></path>
    </svg>
  );
}

export default InformationIcon;
