import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SheetSide() {
  return (
    <div className="gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <TiThMenu className="text-2xl cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-white w-[80%] md:w-[300px] shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out z-50"
        >
          <nav className="flex flex-col gap-4 p-4 text-lg">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/products" className="hover:text-gray-600">Products</Link>
            <Link href="/brands" className="hover:text-gray-600">Brands</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}