import { generateCodeChallenge, generateCodeVerifier } from "./partials"

const clientId = import.meta.env.VITE_CLIENT_ID
const redirectURI = import.meta.env.VITE_REDIRECT_URI

export async function redirectToAuthCodeFlow() {
  const verifier = generateCodeVerifier(128)
  const challenge = await generateCodeChallenge(verifier)
  const params = new URLSearchParams()
  const scopePermissions =
    "user-read-private user-top-read playlist-modify-public playlist-modify-private"

  localStorage.setItem("verifier", verifier)

  params.append("client_id", clientId)
  params.append("response_type", "code")
  params.append("redirect_uri", `${redirectURI}`)
  params.append("scope", scopePermissions)
  params.append("code_challenge_method", "S256")
  params.append("code_challenge", challenge)

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`
}

async function getAccessToken(code: string): Promise<string> {
  const verifier = localStorage.getItem("verifier")

  const params = new URLSearchParams()
  params.append("client_id", clientId)
  params.append("grant_type", "authorization_code")
  params.append("code", code)
  params.append("redirect_uri", `${redirectURI}`)
  params.append("code_verifier", verifier!)

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  })

  const { access_token } = await result.json()
  return access_token
}

export async function auth(token: string) {
  return await getAccessToken(token)
}
