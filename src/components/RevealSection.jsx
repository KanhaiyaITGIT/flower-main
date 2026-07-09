import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const RevealSection = ({ children, className = "", as: Tag = "section", stagger = false, threshold, rootMargin, ...rest }) => {
  const RenderedTag = Tag;
  const [ref, revealed] = useScrollReveal({ threshold, rootMargin });

  return (
    <RenderedTag
      ref={ref}
      className={`${className} ${revealed ? "sr-revealed" : "sr-hidden"}${stagger ? " sr-stagger" : ""}`}
      {...rest}
    >
      {children}
    </RenderedTag>
  );
};

export default RevealSection;
