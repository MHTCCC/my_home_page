import { createBrowserRouter, Navigate, useLocation } from 'react-router';
import Layout from '../components/Layout/Layout.jsx';
// import Home from '../pages/Home/Home';
// import ArticleDetail from '../pages/ArticleDetail/ArticleDetail';
// import Login from '../pages/Login/Login';
// import ArticleListAdmin from '../pages/Admin/ArticleListAdmin';
// import ArticleEdit from '../pages/Admin/ArticleEdit';
import NotFound from '../pages/NotFound.jsx';
// import { isAuthenticated } from '../api/auth';
// import Categories from '../pages/Categories/Categories';
import Landing from '../pages/Landing/Landing.jsx';

// 保护路由组件
// const ProtectedRoute = ({ children }) => {
//     const location = useLocation();
//     if (!isAuthenticated()) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//     return children;
// };

const router = createBrowserRouter([
    {
        path: '/my_home_page/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;

