"use client";
import React, { useEffect, useState } from "react";
import { UserInterface } from "@/app/interfaces/User.Interface";
import Loader from "../Components/Loader";
import { createUser, deleteUser, updateUser } from "../Services/UserServices";

interface Props {
  userData?: UserInterface | null;
  handleUser?: (user: UserInterface) => void;
  handleLoader: (loader: boolean) => void;
  loader: boolean;
}

const FormUser: React.FC<Props> = ({
  userData,
  handleUser,
  handleLoader,
  loader,
}) => {
  const [user, setUser] = useState<UserInterface>({
    name: "",
    birthday: "",
    gender: "",
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { birthday, name, gender } = user;
    if (name.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return true;
    } else if (!birthday) {
      alert("Debe ingresar una fecha de nacimiento");
      return true;
    } else if (!gender) {
      alert("Debe seleccionar un genero");
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    if (validateForm()) return;
    handleUpadateUser(user);
  };

  const handleUpadateUser = async (user: UserInterface) => {
    handleLoader(true);
    const res = userData
      ? await updateUser(user, userData?._id)
      : await createUser(user);

    if (res && !res.error) {
      alert(
        res.msg
          ? res.msg
          : userData
          ? "Usuario actualizado correctamente"
          : "Usuario creado correctamente"
      );
      setUser({ name: "", birthday: "", gender: "" });
      if (handleUser) handleUser(res.usuario);
    } else {
      alert("Error al crear el usuario");
    }
    handleLoader(false);
  };

  return (
    <div>
      {loader && <Loader />}
      <div className="main">
        <h3 className="title">Usuario</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="contentInput">
            <label className="label">Nombre</label>
            <input
              className="input"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="contentInput">
            <label className="label">Cumpleaños:</label>
            <input
              className="input"
              type="date"
              name="birthday"
              value={user.birthday}
              onChange={handleChange}
            />
          </div>

          <div className="contentInput">
            <label className="label">Género:</label>
            <select
              className="input"
              name="gender"
              value={user.gender}
              onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <button type="submit" className="button">
            {userData ? "Actualizar" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
