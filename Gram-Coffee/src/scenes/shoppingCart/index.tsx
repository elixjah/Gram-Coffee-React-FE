import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace, MdAdd } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import EmptyCart from "../../assets/emptyCart.svg";
import { Offcanvas, Stack } from "react-bootstrap"
import { useStateValue } from '../../context/StateProvider'
import { CartItem } from "./CartItem";
import productItem from "../../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
  }

const ShoppingCart =  ({ isOpen }: ShoppingCartProps) => {

    const { closeCart, cartItems } = useStateValue()
    console.log(isOpen)
    
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {
            cartItems.reduce((total, cartItem) => {
              const item = productItem.find(i => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          }
        </div>
      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default ShoppingCart