// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import { FaGoogle, FaSquareFacebook, FaSquareGithub } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
// ------------------------------------------------------------------------
import Styles from './LoginForm.module.scss';
import { image } from '~/assets';
import { ROUTES } from '~/configs/routes';
// ------------------------------------------------------------------------
const cx = classNames.bind(Styles);
// ------------------------------------------------------------------------'

const LoginForm = () => {
    return (
        <div className={`${cx('login')}`}>
            <div className={`${cx('login-heading')}`}>
                <h1>Login</h1>
                <img src={image.loginHeading} alt="Img" />
            </div>
            <form className={`${cx('login-form')}`}>
                <div className={`${cx('form-field')}`}>
                    <span>
                        <FaUser />
                    </span>
                    <input type="gmail" placeholder="Nhập email" />
                </div>
                <div className={`${cx('form-field')}`}>
                    <span>
                        <FaLock />
                    </span>
                    <input type="password" placeholder="Nhập mật khẩu" />
                </div>
                <div className={`${cx('form-button')}`}>
                    <span>Đăng nhập ngay! </span>
                    <IoIosArrowForward />
                </div>
                <div className={`${cx('form-button')}`}>
                    <NavLink to={ROUTES.signup}>
                        <span>Đăng ký </span>
                        <IoIosArrowForward />
                    </NavLink>
                </div>
            </form>
            <div className={`${cx('login-social')}`}>
                <h1>Đăng Nhập bằng cách khác</h1>
                <div>
                    <a href="https://www.facebook.com/">
                        <FaSquareFacebook size={20} />
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaGoogle size={20} />
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaSquareGithub size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
