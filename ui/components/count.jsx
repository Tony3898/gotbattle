import React, {useEffect, useState} from 'react';

const Count = props => {
  const {number, duration} = props

  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0;
    const end = number
    if (start === end) return;

    let incrementTime = (duration / end) * 1000;

    let timer = setInterval(() => {
      setCount(start += 1)
      if (start === end) clearInterval(timer)
    }, incrementTime);
  }, [number, duration]);

  return (
      <i>{count}</i>
  );
}

export default Count;