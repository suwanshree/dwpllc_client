import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object for base or default style
  baseStyles: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: () => ({
      bg: "silver",
      borderRadius: "8",
      p: "4",
      color: "black",
      fontSize: "l",
      _hover: {
        transform: "scale(1.02, 1.02)",
        bg: darken("silver", 10),
        boxShadow: "md",
      },
      _active: {
        transform: "scale(0.98, 0.98)",
      },
    }),
  },
  defaultProps: {},
};
