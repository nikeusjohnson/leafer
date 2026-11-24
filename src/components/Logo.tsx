import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="wordmark"
      aria-label="Leafer home"
    >
      <Image
        src={dark ? "/brand/leafer-white.svg" : "/brand/leafer-green.svg"}
        width={1071}
        height={309}
        alt=""
        loading={dark ? "lazy" : "eager"}
        unoptimized
      />
    </Link>
  );
}
