import { useState } from "react";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE (branding) */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,73%,35%)] to-[hsl(217,65%,20%)]" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Shield className="w-5 h-5" />
            Yorindo Admin
          </div>

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Secure Admin Access
            </h1>
            <p className="mt-4 text-white/70 max-w-md">
              Manage systems, monitor operations, and control all services from one centralized dashboard.
            </p>
          </div>

          <div className="text-xs text-white/50">
            Internal system only
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (form) */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">

          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Login Admin
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Enter your credentials to continue
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                placeholder="admin@yorindo.com"
                className="mt-2 h-11"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative mt-2">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* CTA */}
            <Button
              type="submit"
              className="w-full h-11 mt-2 
              bg-gradient-to-r from-blue-600 to-blue-700 
              hover:from-blue-500 hover:to-blue-600 
              text-white font-semibold shadow-md shadow-blue-900/20"
            >
              Login
            </Button>

          </form>

          {/* FOOTER */}
          <p className="text-xs text-gray-400 text-center mt-6">
            Restricted to authorized personnel only
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;
