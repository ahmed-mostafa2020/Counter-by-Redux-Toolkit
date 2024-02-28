import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/counterSlice";
import { toggleAuth } from "../store/authSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // const counterOperation = useCallback(
  //   (type, payload) => {
  //     dispatch({ type, payload });
  //   },
  //   [dispatch]
  // );

  // useEffect(() => {
  //   counterOperation("increase", 10);
  // }, [counterOperation]);

  const handleCounterValue = (value) => {
    if (value < 0) {
      return "Number cannot be negative";
    }
    return value;
  };

  // const toggleCounter = () => {
  //   dispatch({ type: "toggleCounter" });
  // };

  return (
    <div className="box">
      {isLoggedIn && (
        <>
          <div>
            Counter: <span> {handleCounterValue(count)} </span>
          </div>

          <div>
            <button
              onClick={() => {
                dispatch(increase(5));
              }}
            >
              increase +
            </button>

            <button
              onClick={() => {
                dispatch(decrease(2));
              }}
            >
              decrease -
            </button>
          </div>
        </>
      )}

      <button onClick={() => dispatch(toggleAuth())}>
        {isLoggedIn ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Counter;
