import Head from "next/head";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

const Layout = ({ title, content, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Head>
    <Navbar />
    <Alert />
    <div className="layout__container">{children}</div>
  </>
);

Layout.defaultProps = {
  title: "Django Next Real Estate ",
  content: "Full Stack Web appliation using Django and Next",
};

export default Layout;
