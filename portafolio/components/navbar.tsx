import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

export function Navbar() {
  
  return (
    <div className="flex justify-between items-center text-white py-2">
      <span>Logo</span>
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap gap-4 text-sm text-gray-400">
          <NavigationMenuItem>Perfil</NavigationMenuItem>
          <NavigationMenuItem>Proyectos</NavigationMenuItem>
          <NavigationMenuItem>Stack</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="bg-gray-500/20">Contactar</Button>
    </div>
  );
}