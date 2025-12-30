import { Link } from "react-router-dom";
import { INTERNAL_LINKS } from "@/consts/seoCopy";
import { preloadRoute } from "@/consts/routes";

type InternalLinksProps = {
  basePath?: string;
  language?: "en" | "fr";
};

const InternalLinks = ({ basePath = "", language = "en" }: InternalLinksProps) => {
  const heading = language === "fr" ? "Découvrir Norica Spa" : "Explore Norica Spa";

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-light mb-6">{heading}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {INTERNAL_LINKS.map((link) => {
            const href = `${basePath}${link.href}`;
            return (
              <Link
                key={href}
                to={href}
                onMouseEnter={() => preloadRoute(href)}
                onFocus={() => preloadRoute(href)}
                className="rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:bg-secondary/30"
              >
                <h3 className="text-lg font-medium mb-2 text-foreground">
                  {language === "fr" ? link.titleFr : link.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "fr" ? link.fr : link.en}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
