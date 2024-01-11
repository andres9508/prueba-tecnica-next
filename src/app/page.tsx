"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="main">
      <h3 className="title">Usuarios</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          width: "100%",
          maxWidth: 400,
        }}>
        <button className="button" onClick={() => router.push("/usuario")}>
          Usuario
        </button>
        <button
          className="button"
          onClick={() => router.push("/usuario-consulta")}>
          Usuario consulta
        </button>
      </div>
    </main>
  );
}
