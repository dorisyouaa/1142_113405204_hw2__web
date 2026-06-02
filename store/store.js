import { create } from 'zustand'

export const usePsyStore = create((set) => ({
  psyData: {
    score: 0,
    quizData: [
      {
        title: "走進一家咖啡廳，你首先會觀察它的？",
        options: [
          { text: "燈光氣氛", value: 1 },
          { text: "裝潢佈置", value: 2 },
          { text: "販賣品項", value: 3 },
          { text: "客人多寡", value: 4 }
        ]
      },
      {
        title: "點完餐之後，你坐下來，這時你注意到距離不遠的地上有一隻貓咪，你會？",
        options: [
          { text: "拿出手機狂拍", value: 1 },
          { text: "默默靠近想要摸到他", value: 2 },
          { text: "坐在座位上祈禱他靠近自己", value: 3 },
          { text: "一心想吃蛋糕，對貓咪不感興趣", value: 4 }
        ]
      },
      {
        title: "餐點終於上齊了，這時你會？",
        options: [
          { text: "先大拍特拍再說", value: 1 },
          { text: "先喝飲料", value: 2 },
          { text: "先吃蛋糕", value: 3 },
          { text: "先起身去拿衛生紙", value: 4 }
        ]
      },
      {
        title: "你覺得今天的體驗非常好，餐點也很棒，你會如何表達？",
        options: [
          { text: "走去櫃檯當面大力稱讚", value: 1 },
          { text: "填寫店內的回饋單", value: 2 },
          { text: "在Google Map留下五星好評", value: 3 },
          { text: "什麼都不做，這麼好的店自己知道就夠了", value: 4 }
        ]
      }
    ]
  },
  setScore: (score) => set((state) => ({
    psyData: { ...state.psyData, score }
  }))
}))