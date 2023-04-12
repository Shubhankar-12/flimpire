import alanBtn from "@alan-ai/alan-sdk-web";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils/index.util";
import { useNavigate } from "react-router-dom";
const alanKey = process.env.REACT_APP_ALAN_KEY;
const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: alanKey,

      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          navigate("/");
        }
      },
    });
  }, []);
};

export default useAlan;
