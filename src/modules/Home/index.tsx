// --------------------------------------------------------------
import { useEffect } from 'react';
// --------------------------------------------------------------
import { TabTitleHandle } from '~/utils/titleDocHandle';
// --------------------------------------------------------------

const Home = () => {
    useEffect(() => {
        TabTitleHandle('Home');
    });
    return <div>Home page</div>;
};

export default Home;
