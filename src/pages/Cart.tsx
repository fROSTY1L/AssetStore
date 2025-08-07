import { ProtectedRoute } from "../features/auth/ui"

const Cart = () => {
  return (
    <ProtectedRoute>
      <div>
        Cart
      </div>
    </ProtectedRoute>
  )
}

export default Cart
