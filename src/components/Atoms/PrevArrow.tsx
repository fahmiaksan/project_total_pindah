interface Props {
  className: string;
  style: React.CSSProperties;
  onClick: () => void;
}
const NextArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 text-white rounded-full flex items-center justify-center`}
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default NextArrow;