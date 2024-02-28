import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const counterOperation = useCallback(
    (type, payload) => {
      dispatch({ type, payload });
    },
    [dispatch]
  );

  useEffect(() => {
    counterOperation("increase", 10);
  }, [counterOperation]);

  const handleCounterValue = (value) => {
    if (value < 0) {
      return "Number cannot be negative";
    }
    return value;
  };

  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  };

  return (
    <div className="box">
      {globalState.showCounter && (
        <div>
          Counter: <span> {handleCounterValue(globalState.value)} </span>
        </div>
      )}

      <button onClick={toggleCounter}>Hide / Show Counter Number</button>

      <div>
        <button
          onClick={() => {
            counterOperation("increase", 5);
          }}
        >
          increase +
        </button>

        <button
          onClick={() => {
            counterOperation("decrease", 2);
          }}
        >
          decrease -
        </button>
      </div>
    </div>
  );
};

export default Counter;
