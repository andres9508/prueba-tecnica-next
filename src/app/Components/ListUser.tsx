"use client";
import React from "react";
import { UserInterface } from "@/app/interfaces/User.Interface";

interface Props {
  usuarios: UserInterface[];
  editarUsuario: (usuario: UserInterface) => void;
  borrarUsuario: (usuario: UserInterface) => void;
}

const ListUsers: React.FC<Props> = ({
  usuarios,
  editarUsuario,
  borrarUsuario,
}) => {
  return (
    <table className="tabla-usuarios">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Cumpleaños</th>
          <th>Sexo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios?.map((usuario, index) => (
          <tr key={`${usuario.name}_${index}`}>
            <td>{usuario.name}</td>
            <td>{usuario.birthday}</td>
            <td>{usuario.gender.toUpperCase()}</td>
            <td>
              <button className="editar" onClick={() => editarUsuario(usuario)}>
                Editar
              </button>
              <button className="borrar" onClick={() => borrarUsuario(usuario)}>
                Borrar
              </button>
            </td>
          </tr>
        ))}
        {usuarios?.length === 0 && (
          <tr>
            <td colSpan={12} style={{ textAlign: "center" }}>
              No hay usuarios registrados
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListUsers;
