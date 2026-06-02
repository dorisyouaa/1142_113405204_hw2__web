"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation"

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);
  const [psyResult, setPsyResult] = useState<React.ReactNode>(<></>);
  
  useEffect(() => {
    getResult();
  }, [psyData.score]);

  function getResult() {
    const score = psyData.score;
    
    // 總分範圍 4 ~ 16，切分為 4 個級距
    if (score <= 6) {
      setPsyResult(
        <div className="flex flex-col items-center gap-4 text-center">
          {/* w-64 h-64 放大圖片，移除 shadow-sm 與任何外框設定 */}
          <img src="/cake1.png" alt="草莓千層蛋糕" className="w-64 h-64 object-contain my-2" />
          <h3 className="text-2xl font-bold text-red-500">草莓千層蛋糕</h3>
          <p className="text-gray-600 leading-relaxed text-sm px-2">
            千層蛋糕由一張張的麵皮與鮮奶油組合而成，中間夾入滿滿的草莓與果醬。雖然你的外在看似柔弱，實則內心堅強，任何事物都無法將你擊垮，就如同疊起來的麵皮一般，堅不摧。
          </p>
        </div>
      );
    } else if (score > 6 && score <= 9) {
      setPsyResult(
        <div className="flex flex-col items-center gap-4 text-center">
          <img src="/cake2.png" alt="巧克力戚風蛋糕" className="w-64 h-64 object-contain my-2" />
          <h3 className="text-2xl font-bold text-amber-900">巧克力戚風蛋糕</h3>
          <p className="text-gray-600 leading-relaxed text-sm px-2">
            戚風蛋糕的口感清爽，內在輕盈柔軟，加入巧克力形成甜中帶苦的滋味。你為人隨和，與周遭的人相處融洽，但也是因為這樣時常需要收拾爛攤子。不要忘記留一點時間給自己，不要讓苦蓋過生活中的甜。
          </p>
        </div>
      );
    } else if (score > 9 && score <= 12) {
      setPsyResult(
        <div className="flex flex-col items-center gap-4 text-center">
          <img src="/cake3.png" alt="抹茶巴斯克蛋糕" className="w-64 h-64 object-contain my-2" />
          <h3 className="text-2xl font-bold text-green-700">抹茶巴斯克蛋糕</h3>
          <p className="text-gray-600 leading-relaxed text-sm px-2">
            巴斯克起司蛋糕的內裡潮濕鬆軟，外側烤至焦黑，卻不會帶有焦味，且入口即化；抹茶與乳酪的融合，則結合了微苦與酸甜的味道。不認識你的人可能會認為你很難相處，實際交流才會發現你只是不輕易打開心房；只有真正了解你，才能感受到你心腸的柔軟之處。
          </p>
        </div>
      );
    } else {
      setPsyResult(
        <div className="flex flex-col items-center gap-4 text-center">
          <img src="/cake4.png" alt="檸檬磅蛋糕" className="w-64 h-64 object-contain my-2" />
          <h3 className="text-2xl font-bold text-yellow-600">檸檬磅蛋糕</h3>
          <p className="text-gray-600 leading-relaxed text-sm px-2">
            磅蛋糕質地緊實，味道濃郁，加入檸檬之後增添了清爽的香味，卻又不會過於酸澀。你不太在意別人的目光，也很少將別人說的話放在心上；但你卻會因為朋友受到不公平的對待而生氣，在朋友們心中是一個講義氣的人，也希望你多為自己考慮一點。
          </p>
        </div>
      );
    }
  }

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between py-6 h-full gap-4">
        
        
        <div className="flex-1 flex items-center justify-center px-2">
          {psyResult}
        </div>
        
        <button 
          className="text-white bg-amber-700 hover:bg-amber-800 transition px-6 py-2.5 rounded-full text-md font-medium shadow-md active:scale-95" 
          onClick={playAgain}
        >
          再玩一次
        </button>
      </div>
    </>
  );
}