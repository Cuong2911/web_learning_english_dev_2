// ------------------------------------------------------------------------
import { Footer, Header } from './components';
// ------------------------------------------------------------------------
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const DefaultLayout = (props: Props) => {
    const { children } = props;
    return (
        <div className="app-default-layout">
            <Header />
            <div style={{ paddingTop: 'var(--height-navbar)', height: '1000px' }}>{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
