import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/counterSlice";
import { toggleAuth } from "../store/authSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleCounter = useCallback(
    (type, payload) => {
      if (type === "increase") {
        dispatch(increase(payload));
      } else {
        dispatch(decrease(payload));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    handleCounter("increase", 10);
  }, [handleCounter]);

  const handleCounterValue = (value) => {
    if (value < 0) {
      return "Number cannot be negative";
    }
    return value;
  };

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
                handleCounter("increase", 5);
              }}
            >
              increase +
            </button>

            <button
              onClick={() => {
                handleCounter("decrease", 2);
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
