import React, { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setComponentVisible] = useState(initialIsVisible);

  const ref = useRef<any>(null);

  const listener = (event: { target: any }) => {
    // Do nothing if clicking ref's element or descendent elements

    if (ref.current && !ref.current.contains(event.target)) {
      setComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener, true);

    return () => {
      document.removeEventListener('mousedown', listener, true);
    };
  });

  return {
    ref,
    isComponentVisible,
    setIsComponentVisible: setComponentVisible,
  };
}
