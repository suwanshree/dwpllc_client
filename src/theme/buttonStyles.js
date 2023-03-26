import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object for base or default style
  baseStyles: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      borderRadius: "8",
      p: "4",
      w: "120px",
      color: mode("grey.800", "silver")(props),
      border: "1px solid",
      fontSize: "l",
      _hover: {
        transform: "scale(1.02, 1.02)",
        color: mode("cyan.500", "cyan.200")(props),
      },
      _active: {
        transform: "scale(0.98, 0.98)",
        color: mode("cyan.500", "cyan.200")(props),
      },
    }),
  },
  defaultProps: {},
};
