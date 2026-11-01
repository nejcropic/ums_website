import { useClientReducedMotion } from "../../hooks/useClientReducedMotion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type RevealTag = "div" | "section";

interface RevealProps {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
  labelledBy?: string;
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  order: number;
}

const easeOut = [0.16, 1, 0.3, 1] as const;
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOut },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, delay, ease: easeOut },
  }),
};
const immediateVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};
const immediateItemVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: (_delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0 },
  }),
};

function useImmediateReveal() {
  const reducedMotion = useClientReducedMotion();
  const { hash } = useLocation();
  return reducedMotion !== false || Boolean(hash);
}

export function Reveal({
  as = "div",
  children,
  className,
  id,
  label,
  labelledBy,
}: RevealProps) {
  const immediate = useImmediateReveal();
  const container = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (immediate || !container.current || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    // Server HTML stays visible. Only off-screen content is hidden after hydration.
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.disconnect();
    }, { threshold: 0.12 });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [immediate]);
  const variants = immediate ? immediateVariants : sectionVariants;
  const motionProps = {
    className,
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy,
    variants,
    ref: (element: HTMLElement | null) => { container.current = element; },
    initial: false as const,
    animate: immediate || visible ? "visible" : "hidden",
  };

  return as === "section" ? (
    <motion.section {...motionProps}>{children}</motion.section>
  ) : (
    <motion.div {...motionProps}>{children}</motion.div>
  );
}

export function RevealItem({ children, className, order }: RevealItemProps) {
  const immediate = useImmediateReveal();
  return (
    <motion.article
      className={className}
      custom={Math.min(order, 6) * 0.065}
      variants={immediate ? immediateItemVariants : itemVariants}
    >
      {children}
    </motion.article>
  );
}
