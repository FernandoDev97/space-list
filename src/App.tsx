import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { GlobalStyles, PagesWrapper } from "./styles/global";
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from "./routes";
import { LoadingProvider } from "./context/LoadingContexts";
import { Loading } from "./components/Loading";
import { AuthProvider } from "./context/AuthContext";
import { ListProvider } from "./context/ListContent";

function App() {
  return (
    <Router>
      <LoadingProvider>
        <AuthProvider>
          <ListProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <PagesWrapper>
                <Loading />
                <RoutesComponent />
              </PagesWrapper>
            </ThemeProvider>
          </ListProvider>
        </AuthProvider>
      </LoadingProvider>
    </Router>
  );
}

export default App;
