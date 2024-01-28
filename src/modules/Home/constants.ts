import { ICardProps } from '~/components/CardBox';

const homeBGCardContent: ICardProps = {
    imgSrc: 'https://www.voca.vn/assets/images/home/home.svg?n=1',
    imgLeft: true,
    title: 'Chào mừng bạn đến với VOCA.VN',
    desc: 'Hệ Thống Học Tiếng Anh Thông Minh',
    btn: 'Bạn là người mới? ĐĂNG KÝ THÀNH VIÊN!',
    btnLink: '/auth/login',
};
const homeBodyCardContent: Array<ICardProps> = [
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-1.svg',
        imgLeft: false,
        title: 'Cách học tiếng Anh thông minh!',
        desc: 'Học tiếng Anh một cách vui vẻ, hiệu quả thông qua những phương pháp học đã được kiểm chứng.',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-2.svg',
        imgLeft: true,
        title: 'Hơn 500+ khóa học tiếng Anh',
        desc: 'Sẵn sàng chinh phục mọi mục tiêu với các khóa học tiếng Anh theo kỹ năng, chứng chỉ, giao tiếp, tiếng Anh trên lớp, tiếng Anh thương mại, tiếng Anh du lịch,..',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-3.svg',
        imgLeft: false,
        title: 'Lộ trình học được Cá nhân hoá',
        desc: 'Với công nghệ máy học thông minh, hệ thống sẽ tự động đưa ra gợi ý, đề xuất và cho phép bạn học được điều chỉnh, lựa chọn nội dung, cấp độ học tập phù hợp.',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-4.svg',
        imgLeft: true,
        title: 'Nhắc nhở học mỗi ngày',
        desc: 'Hệ thống thư điện tử (email) cùng các tính năng nhắc nhở ôn tập định kỳ giúp bạn học duy trì thói quen học tiếng Anh hiệu quả.',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-5.svg',
        imgLeft: false,
        title: 'Kiểm tra trình độ miễn phí',
        desc: 'Giúp bạn biết được chính xác trình độ tiếng Anh của mình trước, trong và xuyên suốt quá trình học.',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-6.svg',
        imgLeft: true,
        title: 'Chương trình học chuẩn quốc tế',
        desc: 'Dựa trên khung tham chiếu và đánh giá năng lực ngoại ngữ Châu Âu (Common European Framework of Reference)',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-7.svg',
        imgLeft: false,
        title: 'Dành cho mọi đối tượng',
        desc: 'Nội dung, phương pháp học tập được VOCA thiết kế tương thích cho cả học sinh, sinh viên, và người đi làm.',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-8.svg',
        imgLeft: true,
        title: 'Hơn 2 triệu học viên',
        desc: 'Bao gồm cả sinh viên, học sinh, người đi làm và du học sinh tại nhiều nước trên thế giới theo học VOCA mỗi ngày.',
    },
    {
        imgSrc: 'https://www.voca.vn/assets/images/home/home-9.svg',
        imgLeft: false,
        title: 'Học tiếng Anh tiện lợi: mọi lúc, mọi nơi!',
        desc: 'Hỗ trợ học trên đa thiết bị (máy tính, điện thoại thông minh), với đầy đủ các phiên bản trên cả website, ứng dụng (iPhone, android)',
    },
];

export { homeBGCardContent, homeBodyCardContent };
