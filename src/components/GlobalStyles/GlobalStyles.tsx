// ------------------------------------------------------------------------
import './GlobalStyles.scss';
// ------------------------------------------------------------------------
type Props = {
    children: string | JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const GlobalStyles = (props: Props) => {
    const { children } = props;

    return <section className="global-styles">{children}</section>;
};

export default GlobalStyles;
