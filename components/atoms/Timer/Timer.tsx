import React, { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer: React.FC = () => {
  const deadline = "2023-08-05T13:00:00+02:00";
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000,
    );

    return () => clearInterval(interval);
  }, []);

  const days = `${Math.floor(time / DAY)}`.padStart(2, "0");
  const hours = `${Math.floor((time / HOUR) % 24)}`.padStart(2, "0");
  const minutes = `${Math.floor((time / MINUTE) % 60)}`.padStart(2, "0");
  const seconds = `${Math.floor((time / SECOND) % 60)}`.padStart(2, "0");

  return (
    <span>
      {`${days}`}.{`${hours}`}.{`${minutes}`}.{`${seconds}`}
    </span>
  );
};
