// library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// static
import Home from '~/modules/Home';
import Auth from '~/modules/Auth';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/login" element={<Auth login />} />
                    <Route path="/auth/sign-up" element={<Auth signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
