import alanBtn from "@alan-ai/alan-sdk-web";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../utils/ToggleColorMode";
const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") setMode("dark");
          else setMode("light");
        }
      },
    });
  }, []);
};

export default useAlan;
