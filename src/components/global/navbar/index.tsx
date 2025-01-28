"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">Recipe</Link>
        <div>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : isSignedIn ? (
            <div className="flex items-center space-x-2">
              <Link href="/profile">
                <Button variant="secondary">Profile</Button>
              </Link>
              <Link href="/meal-plan">
                <Button variant="secondary">Meal Plan</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
