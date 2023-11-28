// ------------------------------------------------------------------------
import { Fragment } from 'react';
// ------------------------------------------------------------------------
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const NoLayout = (props: Props) => {
    const { children } = props;
    return <div className="app-no-layout">{children}</div>;
};

export default NoLayout;
