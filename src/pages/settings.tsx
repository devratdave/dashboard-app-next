// src/pages/settings.tsx
import DashboardHeader from '../components/ui/DashboardHeader';
import DashboardSidebar from '../components/ui/DashboardSidebar';

export default function Settings() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-48">
        <DashboardHeader />
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <p>Here you can configure your dashboard settings.</p>
        </div>
      </div>
    </div>
  );
}
