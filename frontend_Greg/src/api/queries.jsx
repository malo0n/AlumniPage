export async function fetchProfile(id) {
  try {
    let data = await fetch(`http://89.111.154.220/api/user/?id=${id}`).then((response) => response.json());
    return data[0];
  } catch (e) {
    console.error("Fetch error: ", e);
    throw e;
  }
}

export async function fetchAllProfiles() {
  try {
    let data = await fetch(`http://89.111.154.220/api/users`).then((response) => response.json());
    return data;
  } catch (e) {
    console.error("Fetch error: ", e);
    throw e;
  }
}