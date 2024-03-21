export async function fetchProfile(id) {
  try {
    let data = await fetch(`http://alumni-style.ru/api/user/?id=${id}`).then((response) => response.json());
    return data[0];
  } catch (e) {
    console.error("Fetch error: ", e);
    throw e;
  }
}

export async function fetchAllProfiles() {
  try {
    let data = await fetch(`http://alumni-style.ru/api/users/`).then((response) => response.json());
    return data;
  } catch (e) {
    console.error("Fetch error: ", e);
    throw e;
  }
}