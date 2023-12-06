// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './HomeContent.module.scss';
// --------------------------------------------------------------
import CardBox, { ICardProps } from '~/components/CardBox';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);
interface Props {
    homeBodyCardContent: Array<ICardProps>;
}
// --------------------------------------------------------------
const HomeContent = (props: Props) => {
    const { homeBodyCardContent } = props;
    return (
        <div className={`container ${cx('wrap')}`}>
            {homeBodyCardContent.map((body, index) => {
                const { imgSrc, imgLeft, title, desc } = body;
                return (
                    <div className={`animation-fade-in ${cx('box')}`}>
                        <CardBox
                            imgSrc={imgSrc}
                            imgLeft={imgLeft}
                            imgSize="80%"
                            title={title}
                            desc={desc}
                            content="left"
                            titleColor="var(--text-color-bg-dark)"
                            titleFontSize="3.4rem"
                            descColor="var(--text-primary-color-sub)"
                            descFontSize="1.8rem"
                        />
                    </div>
                );
            })}

            <div className={`container ${cx('end-box')}`}>
                <CardBox
                    imgSrc="https://www.voca.vn/assets/images/premium/premium.svg?n=1"
                    imgLeft={false}
                    imgSize="80%"
                    title="Bắt đầu miễn phí, hoặc tham gia với Premium!"
                    desc="Tham gia vào cộng đồng thành viên Premium để bắt đầu hành trình chinh phục tiếng Anh ngay bây giờ. Chỉ từ 99.000₫ mỗi tháng!"
                    content="left"
                    titleColor="var(--text-primary-color)"
                    titleFontSize="3.4rem"
                    descColor="var(--text-primary-color)"
                    descFontSize="1.8rem"
                    btn="Bắt đầu miễn phí"
                />
            </div>
        </div>
    );
};

export default HomeContent;
