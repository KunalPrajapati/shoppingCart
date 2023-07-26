
// import {FcDeleteDatabase} from "react-icons/fc"
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex justify-evenly pt-5 pb-5">

        <div >
          <img src={item.image} className=" h-36 w-36" alt=""/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className=" max-w-[600px] ">{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div className="h-[10px] w-[10px]"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
