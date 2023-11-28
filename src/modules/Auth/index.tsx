// static
import { Login, Signup } from './components';

type Props = {
    login?: boolean;
    signup?: boolean;
};

const Auth = (props: Props) => {
    const { login = false, signup = false } = props;
    return (
        <div>
            {login && <Login />}
            {signup && <Signup />}
        </div>
    );
};

export default Auth;
