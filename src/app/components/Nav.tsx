import {Link, useLocation} from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu";
import {cn} from "@/shared/utils/utils.ts";

const NAVIGATION_LINKS = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/stats",
    name: "Stats",
  },
];

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className=" border-b">
      <div className="max-w-[1024px] mx-auto p-4 flex items-center justify-between">
        <Link
          className="flex items-center gap-2 font-medium select-none"
          to="/"
          aria-label="Open home page"
        >
          <img className="size-8" src="/logo.svg" alt="" aria-hidden="true" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {NAVIGATION_LINKS.map((link) => (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === link.path && "bg-gray-100",
                  )}
                >
                  <Link to={link.path}>{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Nav;
