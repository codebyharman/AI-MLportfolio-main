import React from "react";

interface XIconProps {
  size?: number;
  className?: string;
}

export const XIcon: React.FC<XIconProps> = ({ 
  size = 24, 
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.2833 10.1417L23.2178 0H21.1006L13.3427 8.82L7.14656 0H0L9.36984 13.3417L0 24H2.11732L10.3098 14.6633L16.8534 24H24L14.2827 10.1417H14.2833ZM11.3833 13.4733L10.4463 12.15L2.88051 1.675H6.1323L12.2503 10.1833L13.1873 11.5067L21.1006 22.425H17.8488L11.3833 13.4733Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default XIcon; 