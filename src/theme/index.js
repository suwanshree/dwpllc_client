import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles.js";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const overrides = {
  components: {
    Button,
  },
};

const theme = extendTheme({ config }, overrides);

export default theme;
