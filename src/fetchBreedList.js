const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const resApi = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!resApi.ok) {
    throw new Error(`breed list for ${animal} not found`);
  }

  return resApi.json();
};

export default fetchBreedList;
