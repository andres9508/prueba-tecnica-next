import { getData, deleteData, postData, putData } from "./FechtServices";
import { UserInterface } from "@/app/interfaces/User.Interface";

const originalPath = process.env.NEXT_PUBLIC_URL_API;

export const getUsers = async () => {
  const res = await getData(originalPath + "/users");
  return res;
};

export const createUser = async (user: UserInterface) => {
  const res = await postData(originalPath + "/users", user);
  return res;
};

export const updateUser = async (
  user: UserInterface,
  id: string | undefined
) => {
  if (!id) return alert("No se ha podido actualizar el usuario");
  const res = await putData(originalPath + `/users/${id}`, user);
  return res;
};

export const deleteUser = async (id?: string) => {
  const res = await deleteData(originalPath + `/users/${id}`);
  return res;
};
