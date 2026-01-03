import { CardPerfil } from "@/components/card-perfil";
import { CardProject } from "@/components/card-project";
import { CardStack } from "@/components/card-stack";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-10 py-1"><Navbar /></header>
      <Separator className="bg-gray-800"></Separator>
      <main className="flex-1 flex-col items-center w-full px-10 py-16 ">
        <div className="flex flex-col gap-16">
          <div><Hero /></div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <CardPerfil/>
              <CardStack/>
            </div>
            <div className="lg:col-span-8">
              <CardProject/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
