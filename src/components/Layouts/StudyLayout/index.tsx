// ------------------------------------------------------------------------
import { Footer, Header } from './components';
// ------------------------------------------------------------------------
type Props = {
    children: JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const StudyLayout = (props: Props) => {
    const { children } = props;
    return (
        <div className="app-study-layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default StudyLayout;
