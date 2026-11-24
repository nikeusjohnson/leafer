type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};
export default function Image({ src, width, priority, ...props }: Props) {
  const candidates = [240, 480, 768].filter((size) => size < width);
  const srcSet = [
    ...candidates.map(
      (size) => src.replace(".webp", "-" + size + ".webp") + " " + size + "w",
    ),
    src + " " + width + "w",
  ].join(", ");
  return (
    <img
      {...props}
      src={src}
      width={width}
      srcSet={srcSet}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
