// static
import './GlobalStyles.scss';

type Props = {
    children: string | JSX.Element | JSX.Element[];
};

const GlobalStyles = (props: Props) => {
    const { children } = props;
    return <div>{children}</div>;
};

export default GlobalStyles;
