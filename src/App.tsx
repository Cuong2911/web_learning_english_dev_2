// ------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// ------------------------------------------------------------------------
import { privateRoutes, publicRoutes } from '~/routes';
import { TabTitle } from './components';
// ------------------------------------------------------------------------

function App() {
    const auth = true;

    return (
        <Router>
            <Routes>
                {privateRoutes.map((route) => {
                    const Page = route.component;
                    const Layout = route.layout;
                    if (auth) {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <TabTitle>
                                        <Layout>
                                            <Page {...route.props} />
                                        </Layout>
                                    </TabTitle>
                                }
                            />
                        );
                    } else {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <TabTitle>
                                        <Layout>
                                            <Navigate to="/auth/login" />
                                            <Page {...route.props} />
                                        </Layout>
                                    </TabTitle>
                                }
                            />
                        );
                    }
                })}
                {publicRoutes.map((route) => {
                    const Page = route.component;
                    const Layout = route.layout;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <TabTitle>
                                    <Layout>
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
