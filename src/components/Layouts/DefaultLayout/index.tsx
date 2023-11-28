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
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
