// import { useEffect, useState } from "react"

// export const fetchUser = () => {
//   const jsonValue:any = localStorage.getItem("user")
//   const userInfo =
//     localStorage.getItem("user") !== "undefined"
//       ? JSON.parse(jsonValue)
//       : localStorage.clear();

//   return userInfo;
// };
  
// export const fetchCart = () => {
//   const jsonValue:any = localStorage.getItem("cartItems")
//   const cartInfo =
//     localStorage.getItem("cartItems") !== "undefined"
//       ? JSON.parse(jsonValue)
//       : localStorage.clear();

//   return cartInfo ? cartInfo : [];
// };

import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}