export async function fetchData(id) {
  try {
    let data = await fetch(`http://89.111.154.220/api/user/?id=${id}`).then((response) => response.json());
    return data[0];
  } catch (e) {
    console.error("Fetch error: ", e);
    throw e;
  }
}
