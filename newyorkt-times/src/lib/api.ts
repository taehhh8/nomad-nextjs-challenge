const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export async function getAllLists() {
  const response = await fetch(`${BASE_URL}/lists`);
  if (!response.ok) {
    throw new Error("Failed to fetch lists");
  }
  return response.json();
}

export async function getListByName(name: string) {
  const response = await fetch(`${BASE_URL}/list?name=${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch list");
  }
  return response.json();
}
