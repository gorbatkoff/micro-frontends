import React, { useEffect, useRef } from "react";

import Counter from "vue_remote/Counter";
import { createApp } from "vue_remote/vue";

export const CounterWrapper = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const counter = createApp(Counter);
    counter.mount(containerRef.current);

    return () => {
      counter.unmount();
    };
  });

  return <div ref={containerRef}></div>;
};
