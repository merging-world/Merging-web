import { Icon } from 'types/Community';

function SearchIcon(props: Icon) {
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
        d="M21.302 17.931l-3.228-3.223a8.57 8.57 0 10-3.366 3.366l3.223 3.228a2.384 2.384 0 003.37-3.37zm-16.92-7.36a6.19 6.19 0 1112.378 0 6.19 6.19 0 01-12.378 0z"
      ></path>
    </svg>
  );
}

export default SearchIcon;
