"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { usePsyStore } from "../../store/store"

export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  useEffect(() => {
    console.log("目前分數：" + psyData.score);
  }, [psyData.score]);

  function nextQuestion(optionIndex: number) {
    console.log("使用者選擇：" + optionIndex);

    // 累加分數
    const currentQuestion = psyData.quizData[questionIndex];
    const selectedValue = currentQuestion.options[optionIndex].value;
    setPsyScore(psyData.score + selectedValue);
    
    if (questionIndex !== psyData.quizData.length - 1) {  
      console.log("下一題～");
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("進入準備看結果頁面");
      router.push("/prepare");
    }
  }

  const currentQuiz = psyData.quizData[questionIndex];

  return (
    <>
      <div className="flex flex-col items-center gap-6 py-8 h-full justify-between">
        <div className="w-full text-center">
          <span className="text-sm bg-amber-200 text-amber-800 px-3 py-1 rounded-full font-bold">
            {questionIndex + 1} / {psyData.quizData.length}
          </span>
          <h2 className="text-xl font-semibold mt-4 text-gray-800 px-2">
            {"Q" + (questionIndex + 1) + ". " + currentQuiz.title}
          </h2>
        </div>

        {/* 使用 map 自動渲染 4 個選項 */}
        <div className="flex flex-col gap-3 w-full px-4">
          {currentQuiz.options.map((option: any, idx: number) => (
            <div 
              key={idx}
              onClick={() => nextQuestion(idx)}
              className="w-full py-4 px-6 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl cursor-pointer transition text-gray-700 font-medium shadow-sm active:scale-[0.98]"
            >
              {option.text}
              </div>
          ) )}
            </div>

        <div className="text-xs text-gray-400">Cupcake Studio</div>
      </div>
    </>
  );
}