import Button from 'components/ui/Button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center">
        <div className="border border-solid border-slate-200 rounded-md p-16 bg-gray-950">
          <h1 className="text-5xl font-bold text-slate-100">Welcome to the Website Analytics Dashboard App</h1>
          <div className="mt-16 px-16">
          <Button action="Go to the Login Page" onClick={() => router.push('/login')} text="lg"/>
        </div>
        </div>
      </div>
    </div>
  );
}
