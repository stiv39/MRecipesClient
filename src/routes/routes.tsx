import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import { ArticleDetailPage } from '../pages/ArticleDetailPage'
import { ContactPage } from '../pages/ContactPage'
import { AdminArticleDetailPage } from '../pages/AdminArticleDetailPage'
import { AdminMenuPage } from '../pages/AdminMenuPage'
import { AdminArticlesPage } from '../pages/AdminArticlesPage'
import { LoginPage } from '../pages/LoginPage'
import AdminRoute from './AdminRoute'
import { MainPage } from '../pages/MainPage'
import { SearchPage } from '../pages/SearchPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Unexpected error</div>,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'articles/:articleId', element: <ArticleDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'admin', element: <AdminRoute><AdminMenuPage /></AdminRoute> },
      { path: 'admin/new', element: <AdminArticleDetailPage /> },
      { path: 'admin/articles', element: <AdminArticlesPage /> },
      { path: 'admin/articles/:articleId', element: <AdminArticleDetailPage /> },
      { path: 'admin/login', element: <LoginPage /> },
      { path: 'search', element: <SearchPage /> },
    ],
  },
])


export default router
