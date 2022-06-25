import { useState, useEffect, memo } from "react";
import dayjs from "dayjs";

function Counter({ runState, startDate }) {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timer = null;
    if (runState === 'running') {
      timer = setInterval(() => {
        setMilliseconds(c => c + 1000);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [runState, startDate]);

  return (
    <>
      {`${dayjs(startDate + milliseconds).format("HH:mm:ss")}`}
    </>
  );
}

export default memo(Counter);
