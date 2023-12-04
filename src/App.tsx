// ------------------------------------------------------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ------------------------------------------------------------------------
import { publicRoutes } from '~/routes';
import { TabTitle } from './components';
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
