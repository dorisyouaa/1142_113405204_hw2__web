"use client"
import Link from "next/link";

export default function Prepare() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-center h-full px-6">
        <div className="text-6xl animate-bounce">✨</div>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          香甜的味道開始從烤箱裡飄散出來，接下來只要稍加裝飾就大功告成了！究竟這會是怎樣的蛋糕呢？
        </p>
        <Link 
          className="text-white bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-xl text-lg font-medium shadow-md mt-4" 
          href="/result"
        >
          點擊查看結果
        </Link>
      </div>
    </>
  );
}