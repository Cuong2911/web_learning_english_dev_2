// --------------------------------------------------------------
import { HomeBG, HomeContent } from './components';
import { homeBGCardContent, homeBodyCardContent } from './constants';
// --------------------------------------------------------------

const Home = () => {
    return (
        <div>
            <HomeBG homeBGCardContent={homeBGCardContent} />
            <HomeContent homeBodyCardContent={homeBodyCardContent} />
        </div>
    );
};

export default Home;
