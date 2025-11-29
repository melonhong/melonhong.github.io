import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";

/**
 * App 컴포넌트
 * 애플리케이션의 루트 컴포넌트임
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
