// ------------------------------------------------------------------------
import { Fragment } from 'react';
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const AdminLayout = (props: Props) => {
    const { children } = props;
    return <Fragment>{children}</Fragment>;
};

export default AdminLayout;
