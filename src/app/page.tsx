"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { UserInterface } from "@/app/interfaces/User.Interface";
import Loader from "./Components/Loader";

export default function Home() {
  const [user, setUser] = useState<UserInterface>({
    name: "",
    birthday: "",
    gender: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    console.log(typeof e);
    e?.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario
    console.log(user);
  };
  return (
    <main>
      <h3>Usuarios</h3>
      <div
        style={{
          flex: 1,
          height: "full",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}>
        <form className="my-form" onSubmit={handleSubmit}>
          <label htmlFor="">
            Nombre
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Cumpleaños:
            <input
              type="date"
              name="birthday"
              value={user.birthday}
              onChange={handleChange}
            />
          </label>

          <label>
            Género:
            <select name="genero" value={user.gender} onChange={handleChange}>
              <option value="">Seleccione</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
