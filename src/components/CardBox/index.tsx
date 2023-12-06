// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './CardBox.module.scss';
import { type } from 'os';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);
type Props = {
    imgSrc: string;
    imgLeft: boolean;
    imgSize?: string;
    title: string;
    desc: string;
    btn?: string;
    btnLink?: string;
    content?: string;
    titleColor?: string;
    titleFontSize?: string;
    descColor?: string;
    descFontSize?: string;
};
// --------------------------------------------------------------
const CardBox = (props: Props) => {
    const {
        imgSrc,
        imgLeft,
        imgSize = '100%',
        title,
        desc,
        btn,
        btnLink,
        content = 'center',
        titleColor = 'black',
        titleFontSize = '3.4rem',
        descColor = 'black',
        descFontSize = '2.6rem',
    } = props;
    const contentClassName = content === 'center' ? 'display-center' : content === 'left' ? 'display-left-col' : '';
    return (
        <div className={`row ${cx('card')}`}>
            {imgLeft && (
                <div className={`col-6 display-center ${cx('image')}`}>
                    <img src={imgSrc} alt="logo" style={{ height: imgSize }} />
                </div>
            )}
            <div className={`col-6 ${contentClassName} ${cx('content')}`}>
                <div className={`pb-2 ${cx('title')}`} style={{ color: titleColor, fontSize: titleFontSize }}>
                    {title}
                </div>
                <div className={`pb-4 ${cx('desc')}`} style={{ color: descColor, fontSize: descFontSize }}>
                    {desc}
                </div>
                {btn && (
                    <button className={`btn btn-dark Header_nav-btn__G+HSP ${cx('btn')}`}>
                        <a href={btnLink}>{btn}</a>
                    </button>
                )}
            </div>
            {!imgLeft && (
                <div className={`col-6 display-center ${cx('image')}`}>
                    <img src={imgSrc} alt="logo" style={{ height: imgSize }} />
                </div>
            )}
        </div>
    );
};

export type { Props as ICardProps };
export default CardBox;
