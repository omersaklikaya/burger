type PageHeroProps = {
  image: string;
  title: string;
};

export function PageHero({ image, title }: PageHeroProps) {
  return (
    <div
      className="relative w-full h-[250px] md:h-[400px] overflow-hidden"
      style={{ width: "100%", position: "relative", overflow: "hidden" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        className="absolute inset-0 bg-black/40"
        style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.40)" }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <h1 className="inline-block bg-red-600 text-white font-hero text-xl md:text-3xl uppercase tracking-[0.2em] px-5 py-2.5 md:px-6 md:py-3 shadow-[8px_8px_0_0_#000000]">
          {title}
        </h1>
      </div>
    </div>
  );
}
