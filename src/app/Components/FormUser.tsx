"use client";
import React, { useState } from "react";
import { UserInterface } from "@/interfaces/User.Interface";

export default function FormUser() {
  const [user, setUser] = useState<UserInterface>({
    name: "",
    birthday: "",
    gender: "",
  });

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
    // Aquí puedes realizar acciones con los datos del formulario
    console.log(user, "dfsadfa");
  };

  return (
    <div className="main">
      <h3 className="title">Usuario</h3>

      <form className="form" onSubmit={handleSubmit} >
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
          Agregar
        </button>
      </form>
    </div>
  );
}
