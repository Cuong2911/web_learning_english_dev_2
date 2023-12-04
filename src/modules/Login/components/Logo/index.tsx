// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
// ------------------------------------------------------------------------
import Styles from './Logo.module.scss';
import { image } from '~/assets';
// ------------------------------------------------------------------------
const cx = classNames.bind(Styles);
// ------------------------------------------------------------------------

const Logo = () => {
    return (
        <div className={cx('logo')}>
            <div className={`display-left ${cx('logo-head')}`}>
                <img src={image.logo} alt="logo" />
                <div>
                    <span>Learning</span>
                    <span>English</span>
                </div>
            </div>
            <div>
                <hr className="diviser" />
            </div>
            <div className={cx('logo-desc')}>
                Học tiếng anh miễn phí số 1 Việt Nam! Đăng ký học ngay không mai mất phí!
            </div>
        </div>
    );
};

export default Logo;
