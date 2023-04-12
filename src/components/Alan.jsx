import alanBtn from "@alan-ai/alan-sdk-web";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../utils/ToggleColorMode";
const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  useEffect(() => {
    alanBtn({
      key: "f9e9a90a49207b7c8145d45cad5cb5ee2e956eca572e1d8b807a3e2338fdd0dc/stage",

      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }
      },
    });
  }, []);
};

export default useAlan;
