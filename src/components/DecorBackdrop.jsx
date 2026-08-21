import { Flower2 } from "lucide-react";

export default function DecorBackdrop() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(214,83,122,0.10),transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.10),transparent_70%)] blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(24,77,54,0.08),transparent_70%)] blur-3xl" />
      <Flower2 size={260} className="absolute -top-20 -left-16 text-[#C89B3C]/[0.05] rotate-12 hidden xl:block" strokeWidth={0.5} />
      <Flower2 size={200} className="absolute bottom-10 right-0 text-[#D6537A]/[0.05] -rotate-12 hidden xl:block" strokeWidth={0.5} />
      <Flower2 size={160} className="absolute top-1/2 left-1/2 text-[#184D36]/[0.04] rotate-45 hidden 2xl:block" strokeWidth={0.5} />
    </div>
  );
}
