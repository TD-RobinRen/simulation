import { useEffect, useState } from "react";

export default function useCounter() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const timer = setInterval(() => {
      const cur = performance.now();
      setSeconds(Math.trunc((cur - start) * 0.001));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return seconds;
}