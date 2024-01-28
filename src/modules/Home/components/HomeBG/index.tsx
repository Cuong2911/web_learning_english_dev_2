// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import { CardBox } from '~/components';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { ICardProps } from '~/components/CardBox';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);
interface Props {
    homeBGCardContent: ICardProps;
}
// --------------------------------------------------------------

const HomeBG = (props: Props) => {
    const { homeBGCardContent } = props;
    const { imgSrc, imgLeft, title, desc, btn, btnLink } = homeBGCardContent;
    return (
        <div className={`${cx('wrap')}`}>
            <div className={`${cx('main')}`}>
                <div className={`container animation-fade-in-PBtT ${cx('bg')}`}>
                    <CardBox imgSrc={imgSrc} imgLeft={imgLeft} title={title} desc={desc} btn={btn} btnLink={btnLink} />
                </div>
            </div>
            <div className={`${cx('end')}`}></div>
        </div>
    );
};

export default HomeBG;
