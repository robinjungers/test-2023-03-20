import { useEffect, useRef } from 'react';

export default function usePrevious<T>( value : T, copy : ( v : T ) => T ) : T {
  const previous = useRef<T>( value );

  useEffect( () => {
    previous.current = value;
  }, [
    value,
  ] );

  return previous.current;
}