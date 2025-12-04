"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "./button"; // Assuming ButtonProps can be imported

interface ScalingButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const ScalingButton = React.forwardRef<HTMLButtonElement, ScalingButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
      >
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

ScalingButton.displayName = "ScalingButton";

export { ScalingButton };
