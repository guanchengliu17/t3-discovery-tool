import { CREATE_PITCH } from "../../utils/urls";

export const createPitch = (body) => {
  return new Promise((resolve, reject) => {
    fetch(CREATE_PITCH, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body
    })
    .then(response => {
      if (response.ok) {
        resolve(response)
      }
    })
    .catch(error => {
      console.log(error)
    });
  })
};
