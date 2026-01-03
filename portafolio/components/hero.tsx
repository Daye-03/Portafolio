import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <div className="grid grid-cols-12  w-full items-center ">
      <div className="col-span-7 gap-4">
        <Badge variant="secondary" className="border-green-800 bg-green-500/20 text-green-500 text-xs pb-1 font-medium"> Disponible para trabajar</Badge>
        <p className="text-white text-6xl font-extrabold tracking-tight text-balance">Hola, soy Dayelin</p>
        <p className="text-blue-500 text-6xl font-extrabold tracking-tight text-balance">Frontend Dev</p>
        <p className="text-gray-400 text-xl">Transformo ideas creativas en experiencias web excepcionales. Especializada en construir interfaces modernas, accesibles y de alto rendimiento.</p>
      </div>
      <div className="col-span-5 items-center justify-items-center">
        <div className="size-96 rounded-full bg-amber-100 shadow-[0px_0px_60px_rgba(22,23,24,0.35)] shadow-white/20"></div>
      </div>
    </div>
    );
}