import Calculator from "../features/Calculator";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default AppLayout;
