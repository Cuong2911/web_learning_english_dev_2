// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
// ------------------------------------------------------------------------
import { LoginForm, SignupForm, Logo } from './components';
import { TabTitleHandle } from '~/utils/titleDocHandle';
import Styles from './Auth.module.scss';
import { PATH } from '~/configs/routes';
// ------------------------------------------------------------------------
const cx = classNames.bind(Styles);
type Props = {
    login?: boolean;
    signup?: boolean;
};
// ------------------------------------------------------------------------

const Auth = (props: Props) => {
    const { login = false, signup = false } = props;
    useEffect(() => {
        TabTitleHandle(login ? 'Login' : 'Signup');
    });
    return (
        <div className={`container`}>
            <div className={`${cx('back-home-btn')}`}>
                <NavLink to={PATH.home}>
                    <IoMdHome />
                </NavLink>
            </div>
            <div className={`row display-center`}>
                <div className={`col-8 ${cx('')}`}>
                    <Logo />
                </div>
                <div className={`col-4 display-center ${cx('form')}`}>
                    <div className={`${cx('form-container')}`}>
                        <div className={`${cx('form-box')}`}>
                            {login && <LoginForm />}
                            {signup && <SignupForm />}
                        </div>
                        <div className={`${cx('form-bg')}`}>
                            <span className={`${cx('bg_shape')} ${cx('bg_shape_4')}`} />
                            <span className={`${cx('bg_shape')} ${cx('bg_shape_3')}`} />
                            <span className={`${cx('bg_shape')} ${cx('bg_shape_2')}`} />
                            <span className={`${cx('bg_shape')} ${cx('bg_shape_1')}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
