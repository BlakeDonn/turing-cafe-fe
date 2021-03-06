export const getAllReservations = async () => {
  const response = await fetch("http://localhost:3001/api/v1/reservations");
  return await response.json();
};

export const postReservation = async (reservation) => {
  try {
    const promise = await fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
    return await promise.json();
  } catch (e) {
    throw e;
  }
};
export const deleteResy = async (id) => {
  try {
    fetch(`http://localhost:3001/api/v1/reservations/:${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    throw e;
  }
};
