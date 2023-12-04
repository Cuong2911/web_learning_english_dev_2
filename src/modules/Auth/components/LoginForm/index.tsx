// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import { FaGoogle, FaSquareFacebook, FaSquareGithub } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
// ------------------------------------------------------------------------
import Styles from './LoginForm.module.scss';
import { image } from '~/assets';
import { PATH } from '~/configs/routes';
// ------------------------------------------------------------------------
const cx = classNames.bind(Styles);
// ------------------------------------------------------------------------'

const LoginForm = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const onLogin = () => {
        if (!emailInput) {
            alert('moi nhap e mail');
            return;
        }
        if (!passInput) {
            alert('moi nhap mat khau');
            return;
        }
        if (passInput.length < 6) {
            alert('nhap mat khau dai hon 6 ky tu');
            return;
        }
        alert(emailInput + ' - ' + passInput);
    };
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
                    <input
                        type="gmail"
                        placeholder="Nhập email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                </div>
                <div className={`${cx('form-field')}`}>
                    <span>
                        <FaLock />
                    </span>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={passInput}
                        onChange={(e) => setPassInput(e.target.value)}
                    />
                </div>
                <div className={`${cx('form-button')}`} onClick={onLogin}>
                    <span>Đăng nhập ngay! </span>
                    <IoIosArrowForward />
                </div>
                <div className={`${cx('form-button')}`}>
                    <NavLink to={PATH.signup}>
                        <span>Đăng ký</span>
                    </NavLink>
                    <IoIosArrowForward />
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
