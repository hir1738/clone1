// components/Layout.js
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <h1>{children}</h1>
    </div>
  );
};

export default Layout;
