import React, { useState, useEffect, useCallback, useRef } from "react";

const useObserver = (
  onIntersect: IntersectionObserverCallback,
  option: any,
) => {
  const [ref, setRef] = useState<any>(null);

  const isIntersect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref) {
      observer = new IntersectionObserver(isIntersect, {
        ...option,
      });
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, option.root, option.threshold, option.rootMargin, isIntersect]);

  return { setRef };
};

export default useObserver;
