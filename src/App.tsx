// ------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route, Navigate, redirect } from 'react-router-dom';
// ------------------------------------------------------------------------
import { privateRoutes, publicRoutes } from '~/routes';
import { TabTitle } from './components';
// ------------------------------------------------------------------------

function App() {
    const auth = false;
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
                        // return <Navigate to="/auth/login" />;
                        console.log('chuy');

                        redirect('/auth/login');
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
