export default async function getCities() {
  const response = await fetch(
    process.env.PUBLIC_URL + "/services/cities.json"
  );
  
  const data = await response.json();
  return data;
}
