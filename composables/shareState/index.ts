//共享状态
export const useShareState = (state:string = "") => useState("shareState",() => state);