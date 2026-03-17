import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 min-h-[calc(100vh-12rem)] px-4 py-16 flex flex-col">
        <div className="max-w-4xl mx-auto w-full">
          <div className="max-w-md mx-auto">
            <AuthForm mode="login" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

