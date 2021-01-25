export default async function getCategory() {
  const response = await fetch(
    process.env.PUBLIC_URL + "/services/categories.json"
  );
  const data = await response.json();
  return data;
}
