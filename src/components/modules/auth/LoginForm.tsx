"use client";

import { FormCheckbox } from "@/components/shared/FormCheckbox";
import { FormInput } from "@/components/shared/FormInput";
import { loginSchema, type LoginFormData } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement login API call
      console.log("Login data:", data);
      // await loginApi(data)
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        id="email"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        icon={<Mail size={18} />}
        error={errors.email}
        autoComplete="email"
        {...register("email")}
      />

      <FormInput
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        icon={<Lock size={18} />}
        error={errors.password}
        autoComplete="current-password"
        endAdornment={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground transition-colors hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...register("password")}
      />

      <div className="flex items-center justify-between">
        <FormCheckbox
          id="rememberMe"
          label="Remember me"
          error={errors.rememberMe}
          {...register("rememberMe")}
        />
        <Link href="/forgot-password" className="text-primary text-sm">
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-primary hover:bg-primary/90 w-full rounded-lg py-2 font-medium text-white transition-colors disabled:opacity-50"
      >
        {isLoading ? "Login in..." : "Login"}
      </button>
    </form>
  );
}
