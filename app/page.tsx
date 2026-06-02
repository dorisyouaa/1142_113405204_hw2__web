"use client"
import Link from "next/link";
import { useState } from "react";
import { ColorSlider, Label } from '@heroui/react';
import { parseColor } from "react-aria-components";
import ActionButton from "@/component/ActionButton";

export default function Home() {
  const [color, setColor] = useState(parseColor("hsl(0, 100%, 50%)"));

  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center h-full justify-center">
        <h1 className="text-2xl font-bold text-amber-800">🧁 你是哪一種蛋糕？</h1>
        
        <p className="text-gray-600 leading-relaxed px-4">
          咖啡廳裡香氣四溢、五顏六色的蛋糕總令人神往，如果你是一片蛋糕，會是什麼類型的蛋糕呢？現在就來測測看吧。
        </p>

      

        <Link className="text-white bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-full text-lg font-medium shadow-md" href="/question">
          開始製作
        </Link>
        
       
      </div>
    </>
  );
}