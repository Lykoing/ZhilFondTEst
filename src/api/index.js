import axios from "axios";

export default async function getAllUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const response = await axios.get(baseUrl);
  const data = response.data;
  return data;
}
