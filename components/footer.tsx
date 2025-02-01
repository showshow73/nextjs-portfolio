export default function Footer() {
    return (
      <footer className="bg-gray-900 py-4 text-white shadow-md">
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          <h2 className="text-lg font-semibold text-[rgb(255,245,180)]">
            S.I&apos;s PortFolio
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} S.I&apos;s PortFolio. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  