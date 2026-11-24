
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="/"
      className="wordmark"
      aria-label="Leafer home"
    >
      <img
        src={dark ? "/brand/leafer-white.svg" : "/brand/leafer-green.svg"}
        width={1071}
        height={309}
        alt=""
        loading={dark ? "lazy" : "eager"}
      />
    </a>
  );
}
