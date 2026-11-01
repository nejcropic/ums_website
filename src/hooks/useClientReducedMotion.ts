import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// The server and first hydration render must have the same preference snapshot.
export function useClientReducedMotion() {
  const preference = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return mounted ? preference : null;
}
