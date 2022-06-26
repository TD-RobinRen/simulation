import { useState, useEffect, memo } from "react";
import dayjs from "dayjs";

function Counter({ runState, startDate, offset = 1, onChange = () => null }) {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timer = null;
    if (runState === 'running') {
      timer = setInterval(() => {
        setMilliseconds(c => c + 1000 * offset);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [runState, startDate, offset]);

  useEffect(() => {
    onChange(startDate + milliseconds);
  }, [milliseconds, onChange, startDate])

  return (
    <span id="currentTime">
      {`${dayjs(startDate + milliseconds).format("YYYY-MM-DD hh:mm:ss:A")}`}
    </span>
  );
}

export default memo(Counter);
