import Nav from "./nav";
import Seo from './seo';


const Layout = ({ children, categories, seo, hashtags}) => (
  <>
    <Seo seo={ seo }/>
    <Nav categories={ categories } hashtags={ hashtags }/>
      {children}
  </>
);

export default Layout;