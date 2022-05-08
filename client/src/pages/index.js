import Layout from '../hocs/Layout';
import Main from '../components/Main';

const Home = () => {
  return (
    <Layout
      title='Django Next Application'
      content='Home Page for Real Estate primary using Django and Next.'
    >
      <Main />
    </Layout>
  );
};

export default Home;
