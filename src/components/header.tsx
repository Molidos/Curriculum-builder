import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserAuthButton } from "@/components/user-auth-button";

export function Header() {
  return (
    <nav className="border-b">
      <div className="container max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          PortfolioBuilder
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserAuthButton />
        </div>
      </div>
    </nav>
  );
} 