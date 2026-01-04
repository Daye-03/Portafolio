import { DownloadIcon, Layers2Icon, MonitorSmartphoneIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  w-full items-center ">
      <div className="lg:col-span-8 gap-4">
        <Badge
          variant="secondary"
          className="border-green-800 bg-green-500/20 text-green-500 text-xs pb-1 font-medium"
        >
          <div className="rounded-full size-2 bg-green-500"></div>
          Disponible para trabajar
        </Badge>
        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white">
          Interfaces Digitales <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500">
            De Alto Impacto.
          </span>
        </h1>
        <p className="text-gray-400 text-xl">
          Transformo ideas creativas en experiencias web excepcionales.
          Especializada en construir interfaces modernas, accesibles y de alto
          rendimiento.
        </p>
        <Button className="bg-gray-500/20 border border-white/10 mt-4">
          <DownloadIcon/>
          Descargar CV
        </Button>
      </div>
      <div className="lg:col-span-4 gap-3 flex items-center justify-center">
        <div className=" xs:min-w-11/12 w-96  flex flex-col gap-3">
          <div className="w-full max-h-40 gap-3 flex flex-col rounded-2xl p-3 bg-skeleto/30 border border-white/5 shadow-lg">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="bg-red-500/80 rounded-full size-3"></div>
                <div className="bg-yellow-500/80 rounded-full size-3"></div>
                <div className="bg-green-500/80 rounded-full size-3"></div>
              </div>
              <div className="bg-gray-500/20 w-28 h-3 rounded-full"></div>
            </div>
            <div className="flex w-full gap-3">
              <div className="flex flex-col w-1/3 gap-3">
                <div className="w-full h-16 bg-gray-500/20  rounded-sm"></div>
                <div className="bg-gray-500/20 w-full h-2 rounded-full"></div>
              </div>
              <div className="flex flex-col w-2/3 gap-3">
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-500/20 w-full h-4 rounded-full"></div>
                  <div className="bg-gray-500/20 w-full h-2 rounded-full"></div>
                  <div className="bg-gray-500/20 w-full h-2 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                  <div className=" w-1/3 bg-gray-500/20 h-10 rounded-lg"></div>
                  <div className=" w-1/3 bg-gray-500/20 h-10 rounded-lg"></div>
                  <div className=" w-1/3 bg-gray-500/20 h-10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-1/2 h-24 rounded-4xl rotate-4 shadow-lg p-1 overflow-hidden">
              <div className="bg-gray-950/30 flex flex-col justify-center items-center rounded-xs w-full h-full ring  ring-fuchsia-500">
                <div className="bg-skeleto/30 p-2 rounded-full">
                  <MonitorSmartphoneIcon className="text-gray-400 size-5" />
                </div>
                <span className="text-gray-400 text-xs">Responsive</span>
                <span className="text-white text-xs">100%</span>
              </div>
            </div>
            <div className="w-1/2 h-24 flex justify-center items-center rounded-2xl bg-skeleto/30 border border-white/5 shadow-lg">
              <Layers2Icon className="text-gray-400"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
