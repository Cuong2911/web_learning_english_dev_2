// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { LearnCard } from '../../components';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

const gamesList = [
    {
        title: 'Đoán Chữ',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/RIx2Atb5kl75jWW4UKFh4eOEudbalsRRo72xCyGFADl.png',
        link: '',
    },
    {
        title: 'Nối Từ',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/HLN67zsQsezuPn7JL6RpN3rhGyyDDPj3OSesYzlCBiH.png',
        link: '',
    },
    {
        title: 'Điền Từ Còn Thiếu',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/oDdU4cAmKyxM2qrlWCH0AORD9g7bowXcUoh1rFP3qFK.png',
        link: '',
    },
    {
        title: 'Đánh Vần',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/GDAagLfq6udZ9TwF6Tigfo96zDWDm0xYEYsiFWI9Z49.png',
        link: '',
    },
];

const GamePage = () => {
    return (
        <div className={`container ${cx('wrap')}`}>
            <h1 className={` ${cx('heading')}`}>Trò Chơi</h1>
            <div className={`row ${cx('')}`}>
                {gamesList.map((item, index) => {
                    return (
                        <div className={`col-4 ${cx('card-box')}`}>
                            <LearnCard
                                key={index}
                                title={item.title}
                                img={item.img}
                                link={item.link}
                                border={false}
                                btnTitle="Chơi ngay"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GamePage;
