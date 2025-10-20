// StickyWrapper.jsx
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StickyWrapper = ({ zIndex, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  return (
    <Box
      ref={ref}
      component={motion.div}
      animate={{
        scale: inView ? 1 : 0.96,   // only slightly smaller
        y: inView ? 0 : 25,         // gently push down to expose top
        opacity: 1                 // (no fade for full visibility)
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 18
      }}
      sx={{
        position: "sticky",
        top: 0,
        zIndex,
        mb: -10,   // visible overlap
        pb: 12,
        "@media (max-width: 900px)": {
          mb: -6,
          pb: 8,
        }
      }}
    >
      {children}
    </Box>
  );
};

export default StickyWrapper;
