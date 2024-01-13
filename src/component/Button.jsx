
import { useDispatch, useSelector  } from "react-redux";
import { taskActions } from "../store/tastSlice";

const Button =()=>{
    const state = useSelector((state) =>(state.task.setState))

    const dispatch = useDispatch();
    const sole = (e) => {
        e.preventDefault();
       dispatch(taskActions.setState());
    //    console.log(state)
    }
    return(
        <button className='btn' onClick={sole}>
            Add
          </button>
    )
}; export default Button;