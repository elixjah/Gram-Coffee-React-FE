import { useStateValue } from '../../context/StateProvider'

type Props = {
  id: number;
  name: string;
  description?: string;
  image: string;
  price: number;
};

const Class = ({ id, name, description, image, price }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useStateValue()
  const quantity = getItemQuantity(id)

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
        <p>Php &nbsp; {price}</p>
        {quantity === 0? (<button className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded" onClick={()=>increaseCartQuantity(id)}>
          + Add to Cart
        </button>)
        :(<div><button className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded" onClick={()=>increaseCartQuantity(id)}>+ Plus</button>{quantity} orders
        <button className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded" onClick={()=>decreaseCartQuantity(id)}>- Minus</button></div>)}

      </div>
      <img alt={`${image}`} src={image} />

    </li>
  );
};

export default Class;
