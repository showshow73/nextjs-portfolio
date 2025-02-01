export default function About() {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-12 lg:px-20">
        <h1 className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
          ここは私のポートフォリオサイトです。私のこれまでの作品やプロジェクトを
          ご覧いただけます。興味のある方はぜひ「Work」ページをご覧ください。
        </p>
        
        <div className="mt-8">
          <a
            href="/product"
            className="inline-block rounded-full bg-red-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-600"
          >
            View My Work
          </a>
        </div>
  
        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
  