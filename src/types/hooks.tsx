import React from "react";

interface IUser {
  name: string;
  email: string;
}

function useStateHook() {
  const [state1, setState1] = React.useState(0);
  const [state2, setState2] = React.useState<number | undefined>();
  const [state3, setState3] = React.useState<Array<number>>([]);

  const [state4, setState4] = React.useState<IUser>({
    name: "test",
    email: "test@mail.com",
  });
}

function useRefHook() {
  const ref1 = React.useRef<HTMLElement>(null);
  const ref2 = React.useRef<HTMLElement | null>(null);
}

interface ITheme {
  color: "dark" | "light";
}

const ThemeContext = React.createContext<ITheme>({ color: "dark" });

function useContextHook() {
  const themeContext = React.useContext<ITheme>(ThemeContext);
}
