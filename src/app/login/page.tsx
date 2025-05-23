import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-8 gap-8">
      <h2 className="text-2xl font-bold">Login</h2>
      <p className="text-center text-lg">
        Choose a provider to log in to your account.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button className="w-full" variant="outline">
          {/* Replace with actual Bluesky OAuth logic */}
          <span className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="#0077FF"/>
              <path d="M16 8l6 8-6 8-6-8 6-8z" fill="#fff"/>
            </svg>
            Login with Bluesky
          </span>
        </Button>
        <Button className="w-full" variant="outline">
          {/* Replace with actual Google OAuth logic */}
          <span className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
              <g>
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.6 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3c-7.7 0-14.3 4.4-17.7 10.7z"/>
                <path fill="#FBBC05" d="M24 43c5.5 0 10.5-1.8 14.4-4.9l-6.7-5.5C29.8 36 24 36 24 36c-5.8 0-10.6-2.9-13.7-7.2l-7 5.4C9.7 41.6 16.2 43 24 43z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.6 4.1-6.4 7.5-11.7 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3c-7.7 0-14.3 4.4-17.7 10.7z"/>
              </g>
            </svg>
            Login with Google
          </span>
        </Button>
      </div>
      <Button asChild variant="link" className="mt-4">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}