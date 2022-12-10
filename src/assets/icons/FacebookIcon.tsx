import { Icon } from 'types/component';

function FacebookIcon(props: Icon) {
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
        d="M22.34 7.377v10.295a4.869 4.869 0 01-4.86 4.867h-1.35v-6.6c0-.28.23-.5.5-.5h1.47c.25 0 .46-.19.49-.441l.23-1.723a.5.5 0 00-.49-.57h-1.7c-.27 0-.5-.22-.5-.501v-1.222c0-.4.08-.721.24-.961.2-.24.56-.36 1.08-.36h.95c.27 0 .5-.231.5-.502V7.697c0-.26-.19-.48-.44-.5-.48-.05-1.04-.07-1.65-.07-1.08 0-1.92.32-2.56.96-.64.642-.92 1.493-.92 2.615v1.502c0 .28-.23.5-.5.5h-1.45c-.27 0-.5.23-.5.501v1.733c0 .27.23.5.5.5h1.45c.27 0 .5.22.5.501v6.6H7.2a4.869 4.869 0 01-4.86-4.867V7.377A4.869 4.869 0 017.2 2.51h10.28c2.68 0 4.86 2.183 4.86 4.867z"
      ></path>
    </svg>
  );
}

export default FacebookIcon;
