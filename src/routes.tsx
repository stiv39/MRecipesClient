import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import { HomePage } from './pages/HomePage'
import { ArticleDetailPage } from './pages/ArticleDetailPage'
import { ContactPage } from './pages/ContactPage'
import { AdminNewArticlePage } from './pages/AdminNewArticlePage'
import { AdminMenuPage } from './pages/AdminMenuPage'
import { AdminArticlesPage } from './pages/AdminArticlesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Unexpected error</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'articles/:articleId', element: <ArticleDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'admin', element: <AdminMenuPage /> },
      { path: 'admin/new', element: <AdminNewArticlePage /> },
      { path: 'admin/articles', element: <AdminArticlesPage /> },
    ],
  },
])

export default router
