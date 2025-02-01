import { clsx, type ClassValue } from "clsx" //条件付きでCSSクラスを効率的に統合するためのライブラリ
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"; //日付・時刻の操作を簡単に行う軽量なライブラリ
import timezone from "dayjs/plugin/timezone"; //タイムゾーンに対応するプラグイン
import utc from "dayjs/plugin/utc"; //UTC時間の取扱いに対応するプラグイン

//与えられたCSSクラスの配列を統合し、最適化したクラス名を返す
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//タイムゾーン設定
dayjs.extend(utc);
dayjs.extend(timezone);

//日付フォーマット関数
export const formatDate = (date: string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
  return formattedDate;
};