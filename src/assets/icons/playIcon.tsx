type IconProps = {
  color?: string;
  size?: number | string;
  onClick?: () => void;
};

const PlayIcon = ({ color = 'black', size = '24px', onClick }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

export default PlayIcon;
