import { Outlet } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
export function AuthenticatedApp() {
  return (
        <PageLayout>
          <Outlet />
        </PageLayout>
  );
}
