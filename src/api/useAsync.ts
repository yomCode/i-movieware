import { useState, useCallback } from "react";

const useAsync = <K = any, T = any, E = string>(
  asyncFunction: (payload: any | undefined) => Promise<T>
) => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(
    (payload: K) => {
      setPending(true);
      setValue(null);
      setError(null);
      return asyncFunction(payload)
        .then((res) => setValue(res))
        .catch((error) => setError(error))
        .finally(() => setPending(false));
    },
    [asyncFunction]
  );

  return [execute, pending, value, error];
};

export default useAsync;
