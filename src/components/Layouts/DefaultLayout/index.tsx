// ------------------------------------------------------------------------
import { Fragment } from 'react';
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
        <Fragment>
            <Header />
            <div style={{ paddingTop: 'var(--height-navbar)', height: '1000px' }}>{children}</div>
            <Footer />
        </Fragment>
    );
};

export default DefaultLayout;
