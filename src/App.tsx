import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTES } from "./components/constants/routes";
import HomePage from "./pages/homeWare/homePage";
import TopBanner from "./layout/topBanner";
import PrimaryNav from "./layout/primaryNav";
import CategoryNav from "./layout/categoryNav";
import FooterBanner from "./layout/footerBanner";
import SidebarButton from "./components/constants/sideBarButton";
import Footer from "./layout/footer";
import ViewProductDetails from "./pages/viewProductDetails/viewProductDetails";
import MobileNav from "./layout/mobileNav";
import MobileFooter from "./layout/mobileFooter";

function App() {
  return (
    <Router>
      <TopBanner />
      <MobileNav />
      <div className="hidden md:block">
        <PrimaryNav />
        <CategoryNav />
      </div>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path="/product/:slug" element={<ViewProductDetails />} />
      </Routes>
      <Footer />
      <MobileFooter />
      <FooterBanner />
      <SidebarButton />
    </Router>
  );
}

export default App;
