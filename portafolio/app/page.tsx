import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-10">
      <header><Navbar /></header>
      <main className="flex-1 flex-col items-center w-full py-16 gap-16">
        <section><Hero /></section>
      </main>
    </div>
  );
}
