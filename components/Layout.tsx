import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Navbar />
      {children}
    </>
);
};

export default Layout


