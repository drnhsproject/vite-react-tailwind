import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

export const LoginPage = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('login');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-linear-600 from-sky-500 to-amber-600">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter your email and password to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2 text-left">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="password" className="flex justify-between items-center">
                  <span>Password</span>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot?
                  </a>
                </Label>
                <Input id="password" type="password" required />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase text-muted-foreground">
              <span className="bg-white px-2">OR</span>
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-full bg-amber-300 text-blue-600 hover:bg-blue-50 text-sm border border-blue-600"
          >
            Login with Google
          </Button>

          <div className="text-sm text-center">
            Don’t have an account? <Button className="text-white p-0 h-auto">Sign Up</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
