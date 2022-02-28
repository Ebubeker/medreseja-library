import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./store/sidebarContext";
import CreateSection from "./components/createsection/CreateSection";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Layout>
          <CreateSection />
        </Layout>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
