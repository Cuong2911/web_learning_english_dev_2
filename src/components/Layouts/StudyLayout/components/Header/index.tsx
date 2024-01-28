import classNames from 'classnames/bind';
import { MdKeyboardArrowLeft, MdMenu } from 'react-icons/md';
// ------------------------------------------------------------------------
import styles from './main.module.scss';
import { PATH } from '~/configs/routes';
import { image } from '~/assets';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);
// ------------------------------------------------------------------------

const Header = () => {
    return (
        <div className={`fixed-top container-fluid ${cx('header')}`}>
            <div className={`${cx('nav')}`}>
                <button type="button" className={`btn display-center ${cx('nav-btn')}`}>
                    <a href={PATH.home}>
                        <MdKeyboardArrowLeft size={30} />
                    </a>
                </button>
                <div className={`display-center ${cx('nav-logo')}`}>
                    <img src={image.logo} alt="logo" />
                    Learning English
                </div>
                <button type="button" className={`btn display-center ${cx('nav-btn')}`}>
                    <MdMenu size={30} />
                </button>
            </div>
        </div>
    );
};

export default Header;
