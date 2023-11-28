// ------------------------------------------------------------------------
import { useEffect } from 'react';
// ------------------------------------------------------------------------
import { LoginForm, SignupForm } from './components';
import { TabTitleHandle } from '~/utils/titleDocHandle';
// ------------------------------------------------------------------------
type Props = {
    login?: boolean;
    signup?: boolean;
};
// ------------------------------------------------------------------------

const Auth = (props: Props) => {
    const { login = false, signup = false } = props;
    useEffect(() => {
        TabTitleHandle(login ? 'Login' : 'Signup');
    });
    return (
        <div>
            {login && <LoginForm />}
            {signup && <SignupForm />}
        </div>
    );
};

export default Auth;
