// ------------------------------------------------------------------------
import { Fragment } from 'react';
import classNames from 'classnames/bind';
// ------------------------------------------------------------------------
import styles from './main.module.scss';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const NoLayout = (props: Props) => {
    const { children } = props;
    return (
        <Fragment>
            <div className={`display-center ${cx('page')}`}>{children}</div>
        </Fragment>
    );
};

export default NoLayout;
