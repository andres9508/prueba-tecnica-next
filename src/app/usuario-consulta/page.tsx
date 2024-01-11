"use client";
import React, { useState, useEffect } from "react";
import ListUser from "../Components/ListUser";
import { UserInterface } from "@/app/interfaces/User.Interface";
import { getUsers, deleteUser } from "../Services/UserServices";
import Loader from "../Components/Loader";
import FormUser from "../Components/FormUser";

const page: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [usuarios, setUsuarios] = useState<UserInterface[]>([]);
  const [user, setuser] = useState<UserInterface | null>(null);
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    if (!loader) setLoader(true);
    const res = await getUsers();
    if (res && !res.error) {
      setUsuarios(res.usuarios);
    } else {
      alert(res.error);
    }
    setLoader(false);
  };

  const editarUsuario = (usuario: UserInterface) => {
    setuser(usuario);
  };

  const borrarUsuario = async (usuario: UserInterface) => {
    let resultado = window.confirm(
      `¿Estas seguro de borrar a ${usuario.name}?`
    );
    if (resultado === true) {
      setLoader(true);
      const res = await deleteUser(usuario._id);
      if (res && !res.error) {
        setUsuarios((prevUsuarios) =>
          prevUsuarios.filter((u) => u._id !== usuario._id)
        );
        alert(res.msg || "Usuario borrado correctamente");
      } else {
        alert(res.msg || res.error);
      }
    }
    setLoader(false);
  };

  const closedEdit = () => {
    setuser(null);
    setNewUser(false);
  };

  const handleUpdateUser = (user: UserInterface) => {
    closedEdit();
    if (user._id) {
      setUsuarios((prevUsuarios) =>
        prevUsuarios.map((u) => (u._id === user._id ? user : u))
      );
    } else {
      setUsuarios((prevUsuarios) => [...prevUsuarios, user]);
    }
  };

  return (
    <div>
      {loader && <Loader />}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row-reverse",
          margin: 5,
          marginBottom: 0,
        }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            maxWidth: 200,
          }}>
          <button
            className="button"
            onClick={
              newUser || user ? () => closedEdit() : () => setNewUser(true)
            }>
            {newUser || user ? "Cancelar" : "Nuevo"}
          </button>
        </div>
      </div>
      {user || newUser ? (
        <FormUser
          userData={user}
          handleUser={(user: UserInterface) => handleUpdateUser(user)}
          loader={loader}
          handleLoader={(v: boolean) => setLoader(v)}
        />
      ) : (
        <div className="app">
          <h2 className="title">Usuario consulta</h2>
          <ListUser
            usuarios={usuarios}
            editarUsuario={editarUsuario}
            borrarUsuario={borrarUsuario}
          />
        </div>
      )}
    </div>
  );
};

export default page;
