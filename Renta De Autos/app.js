//const :firebaseConfig ;
//Guardar Auto
document.getElementById("formAuto").addEventListener("submit", async(e)=>{
    e.preventDefault();
    const auto={
        marca: document.getElementById ("marca").value,
        modelo: document.getElementById("modelo").value,
        precio: document.getElementById("precio"). value,
        placa: document.getElementById("placa").value,
        pasajeros: document.getElementById("pasajeros").value,
        imagen: document.getElementById("imagen").value,

    };
    await addDoc(collection(db,"autos"),auto);
    alert("Auto Registrado");
});
//Guardar Cliente
// Guardar Cliente
document.getElementById("clienteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const cliente = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: parseInt(document.getElementById("telefono").value)
  };

  try {
    await addDoc(collection(db, "clientes"), cliente);
    alert("Cliente Registrado");
    document.getElementById("ClienteForm").reset(); // Limpia el formulario
  } catch (error) {
    alert("Error al guardar: " + error.message);
  }
});


//Guardar Reserva
document
