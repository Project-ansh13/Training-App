import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Trainee App
        </h1>
        <Button>Hello Cursor</Button>
      </div>
    </div>
  );
}
