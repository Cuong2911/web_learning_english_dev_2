// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { NavLink } from 'react-router-dom';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

interface Props {
    title: string;
    img: string;
    link: string;
    border?: boolean;
    btnTitle?: string;
}
const LearnCard = (props: Props) => {
    const { link, title, img, border = true, btnTitle = 'Học Ngay' } = props;
    return (
        <div className={`card ${cx('learn-card')} ${border ? '' : cx('border-none')}`}>
            <img src={img} className={`card-img-top ${cx('img')}`} alt="card img" />
            <div className={`card-body ${cx('body')}`}>
                <h5 className={`card-title ${cx('title')}`}>{title}</h5>
                <NavLink to={link} className={`btn btn-primary ${cx('btn')}`}>
                    {btnTitle}
                </NavLink>
            </div>
        </div>
    );
};

export default LearnCard;
