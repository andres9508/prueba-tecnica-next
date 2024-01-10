'use client';
import React, {useState} from 'react'
import ListUser from '../Components/ListUser'
import { UserInterface } from '@/interfaces/User.Interface';


const page: React.FC = () => {
  const [usuarios, setUsuarios] = useState<UserInterface[]>([
  ]);

 
  const editarUsuario = (usuario: UserInterface) => {
    console.log("Editar usuario:", usuario);
  };

  const borrarUsuario = (usuario: UserInterface) => {
    console.log("Borrar usuario:", usuario);
    setUsuarios((prevUsuarios) =>
      prevUsuarios.filter((u) => u.name !== usuario.name)
    );
  };

  return (
    <div className="app">
      <h2 className="title">Usuario consulta</h2>
      <ListUser
        usuarios={usuarios}
        editarUsuario={editarUsuario}
        borrarUsuario={borrarUsuario}
      />
    </div>
  );
};

export default page