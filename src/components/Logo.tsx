import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className={`wordmark${dark ? " wordmark-inverse" : ""}`}
      aria-label="Leafer home"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 6.5C16 6.4 23.4 11.6 22.1 24.1C10.7 24.5 4.7 17.8 5 6.5Z"
          fill="currentColor"
        />
        <path
          d="M35.9 2.7C36.3 12.3 32.3 18.3 23.7 19.6C22.9 11.7 27.1 5.3 35.9 2.7Z"
          fill="#65B35D"
        />
        <path
          d="M8.2 35.5C12.8 25.7 20.1 21 31.8 19.8C29.9 30.3 21.2 36.4 8.2 35.5Z"
          fill="currentColor"
        />
      </svg>
      <span>
        leafer<span className="logo-stop">.</span>
      </span>
    </Link>
  );
}
