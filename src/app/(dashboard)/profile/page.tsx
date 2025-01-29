"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

function Profile() {
  const { user } = useUser();
  if (!user) {
    redirect("/sign-in");
  }
  return <div>Profile</div>;
}

export default Profile;
