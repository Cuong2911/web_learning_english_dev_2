// ------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ------------------------------------------------------------------------
import { publicRoutes } from '~/routes';
// ------------------------------------------------------------------------

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.component;
                    const Layout = route.layout;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page {...route.props} />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
