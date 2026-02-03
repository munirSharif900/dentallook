import React from "react";

export default function Button({
  onClick = () => {},
  text = "",
  icon = null,
  className = "",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-xl
        transition-all duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
