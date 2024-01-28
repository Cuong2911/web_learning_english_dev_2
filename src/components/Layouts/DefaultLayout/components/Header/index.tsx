// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
// ------------------------------------------------------------------------
import styles from './main.module.scss';
import { PATH } from '~/configs/routes';
import { image } from '~/assets';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);

interface Iuser {
    id?: string;
    name?: string;
    gmail?: string;
    avtUrl?: string;
}
const user: Iuser = {
    id: '12345',
    name: 'Hoang cuong',
    gmail: 'hvcuong29112001@gmail.com',
    avtUrl: 'https://i.pinimg.com/564x/a1/ae/ff/a1aeff688cc6ad5ae43c9a9fa5a1a531.jpg',
};

const menuList = [
    { title: 'Trang chủ', path: PATH.home },
    { title: 'Bài Nghe', path: PATH.listen },
    { title: 'Từ Vựng', path: PATH.voca },
    { title: 'Ngữ Pháp', path: PATH.grammar },
    { title: 'Phát Âm', path: PATH.pronounce },
    { title: 'Trò Chơi', path: PATH.game },
];
const profileMenuList = [
    { divider: true },
    { divider: false, title: 'Hồ sơ của tôi', path: PATH.authDetail },
    { divider: false, title: 'Khóa học của tôi', path: PATH.authCourse },
    { divider: false, title: 'Cài đặt', path: PATH.home },
    { divider: true },
    { divider: false, title: 'Đăng xuất', path: PATH.home },
];

// ------------------------------------------------------------------------

const Header = () => {
    const isLogin = Object.keys(user).length === 0;

    return (
        <nav className={`fixed-top navbar ${cx('header')}`}>
            <div className={`container animation-fade-in-TtB ${cx('nav')}`}>
                {/* -----------------nav logo-------------------- */}
                <div className={`display-center ${cx('nav-logo')}`}>
                    <img src={image.logo} alt="Logo" />
                    Learning English
                </div>
                {/* -----------------nav menu-------------------- */}
                <ul className={`display-center ${cx('nav-menu')}`}>
                    {menuList.map((item, index) => {
                        return (
                            <li key={index} className={`display-center ${cx('nav-item')}`}>
                                <NavLink className={`${cx('nav-link')}`} to={item.path}>
                                    {item.title}
                                </NavLink>
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
                                        <NavLink className="dropdown-item" to={path ? path : ''}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className={`display-center ${cx('nav-end')}`}>
                        <button type="button" className={`btn btn-dark ${cx('nav-btn')}`}>
                            <NavLink className={`${cx('nav-btn-link')}`} to="/auth/login">
                                Đăng nhập
                            </NavLink>
                        </button>
                        <button type="button" className={`btn btn-dark ${cx('nav-btn')}`}>
                            <NavLink className={`${cx('nav-btn-link')}`} to="/auth/sign-up">
                                Đăng ký
                            </NavLink>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
