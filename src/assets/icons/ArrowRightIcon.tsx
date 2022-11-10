import { Icon } from 'types/Icon';

function ArrowRightIcon(props: Icon) {
  const { width = 25, height = 25 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 7 13"
      style={{ flexShrink: 0 }}
    >
      <path
        fill={props.color}
        d="M6.515 6.582a.728.728 0 00-.064-.305.915.915 0 00-.19-.266L1.316 1.174a.707.707 0 00-.52-.21.721.721 0 00-.375.102.733.733 0 00-.273.26.736.736 0 00-.095.375c0 .199.076.376.228.533l4.456 4.348L.281 10.93a.752.752 0 00-.133.908.718.718 0 00.273.267c.114.067.239.101.374.101.208 0 .381-.072.52-.216l4.946-4.837a.915.915 0 00.19-.266.728.728 0 00.064-.305z"
      ></path>
    </svg>
  );
}

export default ArrowRightIcon;
