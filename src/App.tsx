// library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// static
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.component;
                        return <Route key={route.path} path={route.path} element={<Page {...route.props} />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
