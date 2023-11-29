// ------------------------------------------------------------------------
import { useState } from 'react';
// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { ROUTES } from '~/configs/routes';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);
const menuList = [
    { title: 'Trang chủ', path: ROUTES.home },
    { title: 'Học tập', path: ROUTES.home },
    { title: 'Kiểm tra', path: ROUTES.home },
    { title: 'Trò chơi', path: ROUTES.home },
    { title: 'Giới thiệu', path: ROUTES.home },
];
interface Iuser {
    id?: string;
    name?: string;
    gmail?: string;
    avtUrl?: string;
}
const userApi: Iuser = {
    id: '123456',
    name: 'Hoang cuong',
    gmail: 'hvcuong29112001@gmail.com',
    avtUrl: 'https://i.pinimg.com/564x/a1/ae/ff/a1aeff688cc6ad5ae43c9a9fa5a1a531.jpg',
};
// ------------------------------------------------------------------------

const Header = () => {
    const [user, setUser] = useState<Iuser>({});
    const isLogin = Object.keys(user).length === 0;
    const onLogin = () => {
        setUser(userApi);
    };
    const onLogout = () => {
        setUser({});
    };

    return (
        <nav className={`fixed-top navbar ${cx('header')}`}>
            <div className={`container ${cx('nav')}`}>
                <div className={`${cx('nav-logo')}`}>Learning English</div>
                <ul className={`display-center ${cx('nav-menu')}`}>
                    {menuList.map((item, index) => {
                        const active = item.title === 'Trang chủ' ? cx('active') : '';
                        return (
                            <li key={index} className={`display-center ${cx('nav-item')} ${active}`}>
                                <a className={`${cx('nav-link')}`} href={item.path}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                {!isLogin ? (
                    <div className="dropdown">
                        <button
                            className={`avt-circle ${cx('profile')}`}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img src={user.avtUrl} alt="avatar" />
                        </button>
                        <ul className={`dropdown-menu ${cx('profile-menu')}`}>
                            <li className={`display-center ${cx('profile-item')}`}>
                                <div className={`avt-circle ${cx('profile-menu-avt')}`}>
                                    <img src={user.avtUrl} alt="avatar" />
                                </div>
                                <div className={`ms-3 ${cx('profile-menu-info')}`}>
                                    <h1>{user.name}</h1>
                                    <p>{user.gmail}</p>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className={` ${cx('profile-item')}`}>
                                <a className="dropdown-item" href={ROUTES.home}>
                                    Hồ sơ của tôi
                                </a>
                            </li>
                            <li className={` ${cx('profile-item')}`}>
                                <a className="dropdown-item" href={ROUTES.home}>
                                    Khóa học của tôi
                                </a>
                            </li>
                            <li className={` ${cx('profile-item')}`}>
                                <a className="dropdown-item" href={ROUTES.home}>
                                    Cài đặt
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className={`${cx('profile-item')}`}>
                                <a className="dropdown-item" href={ROUTES.home} onClick={onLogout}>
                                    Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className={`display-center ${cx('nav-end')}`}>
                        <button type="button" className={`btn btn-dark ${cx('nav-btn')}`}>
                            {/* <a className={`${cx('nav-btn-link')}`} href={ROUTES.login}> */}
                            <a className={`${cx('nav-btn-link')}`} onClick={onLogin}>
                                Đăng nhập
                            </a>
                        </button>
                        <button type="button" className={`btn btn-dark ${cx('nav-btn')}`}>
                            <a className={`${cx('nav-btn-link')}`} href={ROUTES.signup}>
                                Đăng ký
                            </a>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
