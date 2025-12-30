import { Link } from "react-router-dom";
import { INTERNAL_LINKS } from "@/consts/seoCopy";
import { preloadRoute } from "@/consts/routes";

const InternalLinks = () => (
  <section className="section-padding bg-background">
    <div className="container-wide">
      <h2 className="text-2xl md:text-3xl font-light mb-6">Explore Norica Spa</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {INTERNAL_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onMouseEnter={() => preloadRoute(link.href)}
            onFocus={() => preloadRoute(link.href)}
            className="rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:bg-secondary/30"
          >
            <h3 className="text-lg font-medium mb-2 text-foreground">{link.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{link.en}</p>
            <p className="text-sm text-muted-foreground">{link.fr}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default InternalLinks;
