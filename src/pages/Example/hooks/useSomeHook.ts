import { useCallback, useState } from 'react';

interface Return {
  count: number;
  handleClick: () => void;
}

export const useSomeHook = (): Return => {
  const [count, setCount] = useState<Return['count']>(0);

  const handleClick = useCallback<Return['handleClick']>(() => {
    setCount((prev) => prev + 1);
  }, []);

  return { count, handleClick };
};
