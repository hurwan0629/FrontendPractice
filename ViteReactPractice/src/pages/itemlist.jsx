import { useCart } from "../store/useCartStore"
import { Link } from "react-router-dom"

export default function ItemlistPage() {

    const increaseCart = useCart((state) => state.increase);

    return(
        <div>
            <h1>아이템 리스트트 페이지입니다.</h1>
            <button
              onClick={increaseCart}>
                상품 추가하기기
            </button>
            <Link to="/cart">장바구니 보러가기</Link>
        </div>
    )
}