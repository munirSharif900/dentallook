export default function TabButton({ active, onClick, text }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 text-sm cursor-pointer ${
        active ? "border-b-2 border-[#087BB3] text-[#087BB3]" : "text-gray-500"
      }`}
    >
      {text}
    </button>
  );
}