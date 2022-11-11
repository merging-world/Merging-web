import { Icon } from 'types/Icon';

function AlarmNewIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M16 4c-4.305 0-7.928 3.321-8.427 7.725l-.46 4.06a5.09 5.09 0 01-1.172 2.722c-1.378 1.621-.26 4.16 1.833 4.16h16.453c2.092 0 3.21-2.539 1.832-4.16a5.09 5.09 0 01-1.172-2.722l-.46-4.06C23.928 7.321 20.305 4 16 4zm3.963 21.429C19.353 26.932 17.809 28 16 28c-1.809 0-3.353-1.068-3.963-2.571a.564.564 0 01.527-.762h6.872a.564.564 0 01.527.762z"
        clipRule="evenodd"
      ></path>
      <circle cx="29" cy="3" r="3" fill="#55DB82"></circle>
    </svg>
  );
}

export default AlarmNewIcon;
