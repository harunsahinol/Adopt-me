const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const resApi = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!resApi.ok) {
    throw new Error("Something went wrong");
  }

  return resApi.json();
};

export default fetchPet;
