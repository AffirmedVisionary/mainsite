import Nav3 from "./nav3";


const Layout = ({ children, categories, seo }) => (
  <>
    <Nav3 categories={categories} />
      {children}
  </>
);

export default Layout;