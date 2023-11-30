// ------------------------------------------------------------------------
import { Fragment } from 'react';
// ------------------------------------------------------------------------
import { Header } from './components';
// ------------------------------------------------------------------------
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const StudyLayout = (props: Props) => {
    const { children } = props;
    return (
        <Fragment>
            <Header />
            <div
                style={{
                    paddingTop: 'var(--height-header-study-layout)',
                    height: '1000px',
                }}
            >
                {children}
            </div>
        </Fragment>
    );
};

export default StudyLayout;
