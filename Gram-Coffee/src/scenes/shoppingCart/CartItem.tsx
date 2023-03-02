import { Button, Stack } from "react-bootstrap"
import { useStateValue } from '../../context/StateProvider'
import productItem from "../../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({id, quantity}: CartItemProps) => {

    const { removeFromCart } = useStateValue()
    const item = productItem.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={item.image}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {item.price}
          </div>
        </div>
        <div> {item.price * quantity}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    )
}
