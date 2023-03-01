export const fetchUser = () => {
    const jsonValue:any = localStorage.getItem("user")
    const userInfo =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(jsonValue)
        : localStorage.clear();
  
    return userInfo;
  };
  
  export const fetchCart = () => {
    const jsonValue:any = localStorage.getItem("cartItems")
    const cartInfo =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(jsonValue)
        : localStorage.clear();
  
    return cartInfo ? cartInfo : [];
  };