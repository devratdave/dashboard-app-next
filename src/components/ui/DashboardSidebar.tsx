import Link from 'next/link';

export default function DashboardSidebar() {
  return (
    <aside className="bg-slate-100 w-48 p-6 h-screen fixed border-r border-solid border-gray-900 shadow-md shadow-inner shadow-slate-700">
      <nav className="space-y-4">
        <Link href="/dashboard" className="text-center">
          <p className="block py-2 px-4 rounded hover:bg-gray-300 hover:shadow-sm hover:shadow-gray-400">Dashboard</p>
        </Link>
        <Link href="/settings" className="text-center">
          <p className="block py-2 px-6 rounded hover:bg-gray-300 hover:shadow-sm hover:shadow-gray-400">Settings</p>
        </Link>
      </nav>
    </aside>
  );
}
