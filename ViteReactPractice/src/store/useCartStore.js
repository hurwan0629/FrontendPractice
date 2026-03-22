import { create } from 'zustand'

export const useCart = create((set, get) => ({
    count: 0,

    increase: () => {
        console.log("상품 추가 버튼 눌림");
        console.log(`추가되기 전 상품 개수: ${get().count}`)
        set((state) => ({count: state.count+1}))
    },

    decrease: () => {
        console.log("상품 감소 버튼 눌림");
        console.log(`감소소되기 전 상품 개수: ${get().count}`)
        set((state) => ({count: state.count-1}))
    }
}))