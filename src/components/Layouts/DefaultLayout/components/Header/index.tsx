// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
// ------------------------------------------------------------------------
import styles from './Header.module.scss';
import { PATH } from '~/configs/routes';
import { image } from '~/assets';
import { useLocation } from 'react-router-dom';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);

interface Iuser {
    id?: string;
    name?: string;
    gmail?: string;
    avtUrl?: string;
}
const user: Iuser = {
    // id: '123456',
    // name: 'Hoang cuong',
    // gmail: 'hvcuong29112001@gmail.com',
    // avtUrl: 'https://i.pinimg.com/564x/a1/ae/ff/a1aeff688cc6ad5ae43c9a9fa5a1a531.jpg',
};

const menuList = [
    { title: 'Trang chủ', path: PATH.home },
    { title: 'Học tập', path: PATH.listCourses },
    { title: 'Kiểm tra', path: PATH.examList },
    { title: 'Trò chơi', path: PATH.quiz },
    { title: 'Giới thiệu', path: PATH.about },
];
const profileMenuList = [
    { divider: true },
    { divider: false, title: 'Hồ sơ của tôi', path: PATH.profileDetail },
    { divider: false, title: 'Khóa học của tôi', path: PATH.profileCourses },
    { divider: false, title: 'Cài đặt', path: PATH.setting },
    { divider: true },
    { divider: false, title: 'Đăng xuất', path: PATH.home },
];

// ------------------------------------------------------------------------

const Header = () => {
    const pathCurrent = useLocation().pathname;
    const path = pathCurrent.indexOf('/', 1) > 0 ? pathCurrent.slice(0, pathCurrent.indexOf('/', 1)) : pathCurrent;

    const isLogin = Object.keys(user).length === 0;

    return (
        <nav className={`fixed-top navbar ${cx('header')}`}>
            <div className={`container ${cx('nav')}`}>
                {/* -----------------nav logo-------------------- */}
                <div className={`display-center ${cx('nav-logo')}`}>
                    <img src={image.logo} alt="Logo" />
                    Learning English
                </div>
                {/* -----------------nav menu-------------------- */}
                <ul className={`display-center ${cx('nav-menu')}`}>
                    {menuList.map((item, index) => {
                        const active = item.path === path ? cx('active') : '';
                        return (
                            <li key={index} className={`display-center ${cx('nav-item')} ${active}`}>
                                <a className={`${cx('nav-link')}`} href={item.path}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                {/* -----------------nav end-------------------- */}
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
                            {profileMenuList.map((item, index) => {
                                const path = item.path?.replace(':id', user.id ? user.id : '');

                                return item.divider ? (
                                    <li key={index}>
                                        <hr className="dropdown-divider" />
                                    </li>
                                ) : (
                                    <li key={index} className={`${cx('profile-item')}`}>
                                        <a className="dropdown-item" href={path}>
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className={`display-center ${cx('nav-end')}`}>
                        <button type="button" className={`btn btn-dark ${cx('nav-btn')}`}>
                            <a className={`${cx('nav-btn-link')}`} href="/auth/login">
                                Đăng nhập
                            </a>
                        </button>
                        <button type="button" className={`btn btn-dark ${cx('nav-btn')}`}>
                            <a className={`${cx('nav-btn-link')}`} href="/auth/sign-up">
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
