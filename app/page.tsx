"use client";
/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect } from "react";
import { initBackgroundAnimation } from "@/utils/backgroundAnimation";
import "@/styles/backgroundAnimation.css"; // CSSファイルのインポート

export default function Home() {
  useEffect(() => {
    initBackgroundAnimation();
  }, []);

  return (
    <div className="relative flex h-[80vh] items-center justify-center px-4 text-center md:px-8 lg:px-16">
      <div className="container relative z-10 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold leading-tight tracking-wide text-gray-900 drop-shadow-md sm:text-8xl md:text-9xl">
          Welcome
        </h1>
        <h2 className="text-4xl font-bold leading-tight tracking-widest text-gray-700 drop-shadow-md sm:text-6xl md:text-7xl">
          to My Portfolio
        </h2>

        <p className="mt-8 max-w-3xl text-center text-xl leading-relaxed text-gray-700 md:text-2xl md:leading-loose">
          ここは私のポートフォリオサイトです。
          <br />
          私のこれまでの作品やプロジェクトをご覧いただけます。
          <br />
          興味のある方はぜひ「Product」ページをご覧ください。
        </p>

        <div className="mt-10">
          <a
            href="/product"
            className="inline-block rounded-full bg-red-400 px-8 py-4 text-xl font-semibold text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-red-500"
          >
            View My Product
          </a>
        </div>
      </div>
    </div>
  );
}