import { useSelector, useDispatch } from "react-redux";
import { userSignUp } from "../../store/actions/userActions";
import {
  countIncrement,
  countDicrement,
  countClear,
} from "../../store/actions/countActions";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.user?.userName);
  const counter = useSelector((store) => store.count?.count);
  return (
    <div>
      <p>Header {userName && userName}</p>
      <button
        onClick={() => {
          dispatch(userSignUp({ userName: "John" }));
        }}
      >
        Change
      </button>

      <div>
        <button
          onClick={() => {
            dispatch(countDicrement());
          }}
        >
          -
        </button>
        <span>{counter && counter}</span>
        <button
          onClick={() => {
            dispatch(countIncrement());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "COUNT_CLEAR" });
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export { Header };
