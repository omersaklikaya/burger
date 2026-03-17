import type { User } from "firebase/auth";

export async function isAdminUser(user: User): Promise<boolean> {
  const token = await user.getIdTokenResult();
  return token.claims?.admin === true;
}

export async function refreshClaims(user: User): Promise<boolean> {
  const token = await user.getIdTokenResult(true);
  return token.claims?.admin === true;
}

