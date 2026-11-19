export default function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-border pt-24 pb-10 md:pt-28 md:pb-14">
      <div className="container">
        <p className="text-sm text-primary">{kicker}</p>
        <h1 className="page-title mt-3 max-w-[16em]">{title}</h1>
        <p className="mt-5 max-w-[40rem] text-base leading-8 text-muted-foreground md:text-lg">
          {lede}
        </p>
      </div>
    </header>
  );
}
