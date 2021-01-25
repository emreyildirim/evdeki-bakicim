export default async function getData(city,category,page) {
  const response = await fetch(
    `https://api.evdekibakicim.com/suppliers/list?cityId=${city}&categoryId=${category}&page=${page}`
  );
  const data = await response.json();
  return data;
}



