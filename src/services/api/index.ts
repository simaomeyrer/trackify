export async function api(method: "POST" | "GET" | "PUT" | "DELETE", route: string, body?: any) {
  try {
    await fetch(route, {
      body,
      method,
      headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
    })
  } catch (error: any) {
    if (error.status === 401) console.log("error")
  }
}
