export async function fetchUser() {
  try {
    const res = await fetch("http://localhost:3000/api/session", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      console.log("fetchUser:", data.user);
      return data.user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}
