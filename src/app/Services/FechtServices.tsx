let headers = {
  "Content-Type": "application/json",
};

const generalError = { error: true, status: 500, msg: "Se produjo un error inesperado" };

export async function getData(enpoint: string) {
  try {
    const res = await fetch(enpoint, {
      method: "GET",
      headers,
      mode: "cors",
    });
    return await res.json();
  } catch (Error) {
    Object.assign(generalError, Error);
    return generalError;
  }
}

export async function postData(enpoint: string, values: object) {
  try {
    const res = await fetch(enpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(values),
      mode: "cors",
    });
    return await res.json();
  } catch (Error) {
    Object.assign(generalError, Error);
    console.log("generalError", Error);
    return generalError;
  }
}

export async function deleteData(enpoint: string) {
  try {
    const res = await fetch(enpoint, {
      method: "DELETE",
      headers,
      mode: "cors",
    });
    return await res.json();
  } catch (Error) {
    Object.assign(generalError, Error);
    return generalError;
  }
}

export async function putData(enpoint: string, values: object) {
  try {
    const res = await fetch(enpoint, {
      method: "PUT",
      headers,
      body: JSON.stringify(values),
      mode: "cors",
    });
    return await res.json();
  } catch (Error) {
    Object.assign(generalError, Error);
    return generalError;
  }
}
