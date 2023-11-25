import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthenticatedApp } from './AuthenticatedApp';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/LoginPage';
import { TaskPage } from './pages/TaskPage';
import styles from './styles/App.module.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <AuthenticatedApp />,
    children: [
      {
        path: 'tasks',
        element: <TaskPage />
      }
    ]
  }
]);

function App() {
  return (
    <div className={styles.container}>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
