import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import { HomePage } from './pages/HomePage'
import { ArticleDetailPage } from './pages/ArticleDetailPage'
import { ContactPage } from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Unexpected error</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'articles/:articleId', element: <ArticleDetailPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

export default router
