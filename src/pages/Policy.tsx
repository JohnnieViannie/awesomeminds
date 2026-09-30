import { PageHeroDecor } from "@/components/layout/ui";
export default function Policy({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background font-body pt-2">
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-24 bg-primary text-primary-foreground">
        <PageHeroDecor grid />
        <div className="relative container mx-auto px-6">
          <h1 className="font-heading font-black text-4xl md:text-5xl">{title}</h1>
        </div>
      </section>
    </div>
  );
}
