import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: {
    title: "text-2xl",
    dot: "text-3xl",
    subtitle: "text-[0.55rem]",
  },
  md: {
    title: "text-3xl",
    dot: "text-4xl",
    subtitle: "text-[0.6rem]",
  },
  lg: {
    title: "text-4xl",
    dot: "text-5xl",
    subtitle: "text-[0.65rem]",
  },
};

const Logo = ({
  variant = "dark",
  align = "left",
  size = "md",
}: LogoProps) => {
  const colors =
    variant === "light"
      ? {
          title: "text-white",
          subtitle: "text-white/70",
          hover: "group-hover:text-accent",
        }
      : {
          title: "text-foreground",
          subtitle: "text-foreground/60",
          hover: "group-hover:text-accent",
        };

  return (
    <div
      className={clsx(
        "inline-block leading-none select-none group",
        align === "center" && "text-center"
      )}
    >
      {/* BRAND */}
      <div
        className={clsx(
          "font-brand lowercase font-medium flex items-baseline",
          "tracking-[0.02em]",
          sizeMap[size].title,
          colors.title,
          "transition-colors duration-300",
          colors.hover
        )}
      >
        norica
        <span
          className={clsx(
            "ml-[1px]",
            sizeMap[size].dot
          )}
        >
          .
        </span>
      </div>

      {/* SUBTITLE — intentionally smaller */}
      <div
        className={clsx(
          "mt-1 font-body uppercase font-bold",
          sizeMap[size].subtitle,
          colors.subtitle,
          "transition-colors duration-300",
          colors.hover
        )}
      >
        Laser Hair Removal
      </div>
    </div>
  );
};

export default Logo;
