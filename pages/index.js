import Layout from '@/components/Layout';
import Header from '../components/Header';
import Dashboard from './dashboard';

const Home = () => {
    return (
        <>
            <Layout>
                ¡Diviértete y supera retos para ganar premios!
                <Dashboard />
            </Layout>
        </>
    );
};

export default Home;
