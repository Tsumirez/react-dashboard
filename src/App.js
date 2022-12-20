import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, coloreMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloreMode}>
      <ThemeProvider theme={theme}>
        <div className="app">

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
