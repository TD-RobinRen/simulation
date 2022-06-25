import { useState, useEffect, useMemo, useRef } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export default function Counter({ runState }) {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timer = null;
    if (runState === 'running') {
      const start = performance.now();
      timer = setInterval(() => {
        const cur = performance.now();
        setMilliseconds(Math.trunc((cur - start) * 1));
      }, 30);
    }
    return () => clearInterval(timer);
  }, [runState]);

  const seconds = useMemo(() => Math.trunc(milliseconds / 1000), [milliseconds]);

  return (
    <>
      {`${dayjs
        .duration({
          milliseconds: milliseconds % 1000,
          seconds: seconds % 60,
          minutes: Math.trunc(seconds / 60),
          hours: Math.trunc(seconds / (60 * 60)),
        })
        .format("HH:mm:ss:SSS")}
        `}
    </>
  );
}
