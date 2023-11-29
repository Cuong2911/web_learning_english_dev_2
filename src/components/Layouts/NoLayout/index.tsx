// ------------------------------------------------------------------------
import { Fragment } from 'react';
// ------------------------------------------------------------------------
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const NoLayout = (props: Props) => {
    const { children } = props;
    return (
        <Fragment>
            <div style={{ height: '100vh' }}>{children}</div>
        </Fragment>
    );
};

export default NoLayout;
