// ------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// ------------------------------------------------------------------------
import { routes } from '~/routes';
import { TabTitle } from './components';
import { PATH } from './configs/routes';
// ------------------------------------------------------------------------

function App() {
    const auth = true;
    const isAdmin = true;

    return (
        <Router>
            <Routes>
                {routes.map((route) => {
                    const Page = route.component;
                    const Layout = route.layout;
                    const navigate = () => {
                        if (!auth && route.isPrivate) {
                            return <Navigate to={PATH.login} />;
                        }
                        if (!route.path.indexOf('admin') && !isAdmin) {
                            return <Navigate to={PATH.home} />;
                        }
                        return <></>;
                    };
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <TabTitle>
                                    <Layout>
                                        {navigate()}
                                        <Page {...route.props} />
                                    </Layout>
                                </TabTitle>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
