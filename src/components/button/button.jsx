import React from "react";

export default function Button({
  onClick = () => {},
  text = "",
  icon = null,
  className = "",
  type = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 px-2 py-2 rounded-xl cursor-pointer
        transition-all duration-300
        ${className && className}
      `}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
