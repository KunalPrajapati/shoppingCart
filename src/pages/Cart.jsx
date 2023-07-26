import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="max-w-6xl mx-auto">

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button className="h-[20px] w-[150px] bg-[#3ddb42] pb-6 border rounded-md">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="min-h-[80vh] flex justify-center items-center flex-col">
      <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
