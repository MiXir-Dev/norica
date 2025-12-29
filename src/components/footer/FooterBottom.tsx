type FooterBottomProps = {
  year: number;
};

const FooterBottom = ({ year }: FooterBottomProps) => (
  <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-xs">
    © {year} Norica Spa. All rights reserved.
  </div>
);

export default FooterBottom;
