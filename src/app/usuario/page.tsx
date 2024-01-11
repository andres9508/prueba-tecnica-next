"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormUser from "../Components/FormUser";
import Loader from "../Components/Loader";

export default function Home() {
  const router = useRouter();
  const [loader, setloader] = useState(false);

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
            onClick={() => router.push("/usuario-consulta")}>
            usuario consulta
          </button>
        </div>
      </div>
      <FormUser handleLoader={(v: boolean) => setloader(v)} loader={loader} />
    </div>
  );
}
