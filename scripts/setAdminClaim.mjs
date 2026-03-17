/**
 * One-time helper to grant Firebase Auth custom claim: { admin: true }
 *
 * Usage (PowerShell):
 *   $env:GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\serviceAccount.json"
 *   node scripts/setAdminClaim.mjs admin@example.com
 */

import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "node:fs";

function getCredential() {
  const jsonPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (jsonPath && fs.existsSync(jsonPath)) {
    const raw = fs.readFileSync(jsonPath, "utf8");
    return cert(JSON.parse(raw));
  }
  return applicationDefault();
}

const email = process.argv[2];
if (!email) {
  console.error("Usage: node scripts/setAdminClaim.mjs <admin-email>");
  process.exit(1);
}

initializeApp({ credential: getCredential() });

const auth = getAuth();
const user = await auth.getUserByEmail(email);
await auth.setCustomUserClaims(user.uid, { admin: true });

console.log(`✅ Set admin:true for ${email} (uid=${user.uid})`);
console.log("Note: user must re-login (or refresh token) to receive updated claims.");

