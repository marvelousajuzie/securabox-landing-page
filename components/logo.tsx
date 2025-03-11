export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M250 50L437.5 150V300L250 450L62.5 300V150L250 50Z" fill="#166534" stroke="#22c55e" strokeWidth="20" />
      <path
        d="M250 150C277.614 150 300 172.386 300 200C300 217.414 290.357 232.962 276 241.662V300H224V241.662C209.643 232.962 200 217.414 200 200C200 172.386 222.386 150 250 150Z"
        fill="#22c55e"
      />
      <path
        d="M437.5 150C437.5 150 400 200 250 200C100 200 62.5 150 62.5 150"
        stroke="#22c55e"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  )
}

