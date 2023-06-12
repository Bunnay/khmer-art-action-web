import { NextResponse } from "next/server";
import { checkAuthStatus } from "./hooks/authUtils";

export async function middleware(req, res, next) {
  const user = await checkAuthStatus(req);
  console.log(user);
}
