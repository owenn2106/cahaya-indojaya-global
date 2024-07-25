import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { jumpTo } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const MobileNav = () => {
  const delayedJumpTo = (id: string) => {
    setTimeout(() => {
      jumpTo(id);
    }, 300);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white border-none">
        <div className="flex h-full flex-col justify-between">
          <div className="grid gap-4 p-6">
            <div className="flex items-center flex-wrap pt-16 text-blue text-2xl font-bold">
              Cahaya Indojaya Global
            </div>
            <nav className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <SheetClose key={item.id}>
                  <span
                    onClick={() => delayedJumpTo(item.id)}
                    className="flex items-start whitespace-nowrap gap-2 rounded-md py-2 px-4 text-lg text-purple font-semibold hover:bg-red hover:text-white"
                  >
                    {item.label}
                  </span>
                </SheetClose>
              ))}
            </nav>
          </div>
          <div className="flex flex-col">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Button className="mb-6 w-full">Get a Quote</Button>
            </a>
            <div className="border-t border-t-blue py-4">
              <p className="text-xs text-blue text-end">
                &copy; 2024 Cahaya Indojaya Global All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;