// static
import { LoginForm, SignupForm } from './components';

type Props = {
    login?: boolean;
    signup?: boolean;
};

const Auth = (props: Props) => {
    const { login = false, signup = false } = props;
    return (
        <div>
            {login && <LoginForm />}
            {signup && <SignupForm />}
        </div>
    );
};

export default Auth;
