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

    const { closeCart, cartItems, removeFromCart } = useStateValue()
    console.log(isOpen)
    const user:any = ""

  return (
    <motion.div
    className={`${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-all duration-300 ease-in-out fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50`}
    > 
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={closeCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          // onClick={removeFromCart(id)}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {cartItems && cartItems.length > 0 ? (
  <div className="w-full h-full  rounded-t-[2rem] flex flex-col">
     <div className="w-full h-auto md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
     {cartItems.map(item => (
      <CartItem key={item.id} {...item} />
    ))}
         <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">Php 75</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-black-200 text-xl font-semibold">Total</p>
              <p className="text-black-200 text-xl font-semibold">
              {
                cartItems.reduce((total, cartItem) => {
                  const item = productItem.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              }
            </p>
          </div><br />
          {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-secondary-500 to-secondary-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
     </div>

      </div>
      ): (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}


    </motion.div>

  )
}

export default ShoppingCart