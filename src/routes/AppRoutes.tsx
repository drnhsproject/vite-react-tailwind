import App from '@/App';
import { LoginPage } from '@/modules/auth/pages/LoginPage';
import Page from '@/pages/dashboard/page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}
