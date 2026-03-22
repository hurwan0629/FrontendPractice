import { useState } from 'react'
import { useCart } from "../store/useCartStore"
import { Link } from "react-router-dom"

export default function CartPage() {
    const count = useCart((state) => state.count);

    return(
        <div>
            <h1>장바구니 페이지입니다.</h1>
            <h4>상품 개수: {count}개</h4>
            <Link to="/itemlist">상품 보러가기</Link>
        </div>
    )
}