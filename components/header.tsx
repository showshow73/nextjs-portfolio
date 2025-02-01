import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-red-400 text-white shadow-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between p-6 md:px-12 lg:px-20">
        <Link href="/" className="text-2xl font-bold transition-colors hover:text-[rgb(255,200,150)]">
          PortFolio
        </Link>
        <nav className="flex space-x-8">
          <Link href="/About" className="group relative">
            <span className="text-lg font-semibold transition-all group-hover:scale-110 group-hover:text-[rgb(255,245,180)]">
              About
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[rgb(255,245,180)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/product" className="group relative">
            <span className="text-lg font-semibold transition-all group-hover:scale-110 group-hover:text-[rgb(255,245,180)]">
              Product
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[rgb(255,245,180)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
