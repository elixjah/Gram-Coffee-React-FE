import { useStateValue } from '../../context/StateProvider'
import productItem from "../../data/items.json"
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

type CartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({id, quantity}: CartItemProps) => {

    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useStateValue()
    const item = productItem.find(i => i.id === id)
    if (item == null) return null
    return (
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.image}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.name}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          Php {item?.price * quantity}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => decreaseCartQuantity(item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {quantity}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => increaseCartQuantity(item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
    )
}
