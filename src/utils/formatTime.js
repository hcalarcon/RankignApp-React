const formatTime = (date) => {
  const fecha = new Date(date);

  // Formatear la fecha como dd/mm/aa
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses comienzan en 0
  const anio = String(fecha.getFullYear()).slice(2); // Obtener los últimos dos dígitos del año

  // Formatear la hora como hh:mm
  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");

  // Combinar el formato final
  return `${dia}/${mes}/${anio} - ${horas}:${minutos}hs`;
};

export default formatTime;
