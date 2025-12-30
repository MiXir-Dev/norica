import { FRENCH_SUMMARIES } from "@/consts/seoCopy";

type SummaryKey = keyof typeof FRENCH_SUMMARIES;

type LocalizedSummaryProps = {
  summaryKey: SummaryKey;
};

const LocalizedSummary = ({ summaryKey }: LocalizedSummaryProps) => {
  const summary = FRENCH_SUMMARIES[summaryKey];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-wide max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-light mb-4">{summary.heading}</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {summary.en}
        </p>
        <div className="mt-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Français
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {summary.fr}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalizedSummary;
