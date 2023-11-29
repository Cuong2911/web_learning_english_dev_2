// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);
// ------------------------------------------------------------------------

const Header = () => {
    return <div className={cx('header')}>Header</div>;
};

export default Header;
