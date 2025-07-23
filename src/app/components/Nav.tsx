import {Link, useLocation} from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu";

const Nav = () => {
  const data = useLocation();

  const generateActiveLinkStyle = (path: string) => {
    return data.pathname === path ? "bg-gray-100" : "";
  };

  return (
    <nav className=" border-b">
      <div className="max-w-[1024px] mx-auto p-4 flex items-center justify-between">
        <Link
          className="flex items-center gap-2 font-medium select-none"
          to="/"
        >
          <img
            className="size-8"
            src="/logo.svg"
            alt="Check mark inside rounded box"
          />
          <span>Habits</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} ${generateActiveLinkStyle("/")}`}
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} ${generateActiveLinkStyle("/stats")}`}
              >
                <Link to="/stats">Stats</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Nav;
