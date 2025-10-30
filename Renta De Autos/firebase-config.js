
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhd9QVG0Vh4AMEtJqcQVp_47JXfmqVILQ",
  authDomain: "trasladosalmar.firebaseapp.com",
  databaseURL: "https://trasladosalmar-default-rtdb.firebaseio.com",
  projectId: "trasladosalmar",
  storageBucket: "trasladosalmar.firebasestorage.app",
  messagingSenderId: "719974300137",
  appId: "1:719974300137:web:5c3a212ff4ae43e8d5b378"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};
//  Guardar Auto
document.getElementById("formAuto").addEventListener("submit", async (e) => {
  e.preventDefault();
  const auto = {
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    precio: parseFloat(document.getElementById("precio").value),
    placa: document.getElementById("placa").value,
    pasajeros: parseInt(document.getElementById("pasajeros").value),
    imagen: document.getElementById("imagen").value,
  };

  try {
    await addDoc(collection(db, "autos"), auto);
    alert("Auto registrado");
    document.getElementById("formAuto").reset();
  } catch (error) {
    alert("Error al guardar auto: " + error.message);
  }
});

//  Guardar Cliente
document.getElementById("clienteForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const cliente = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value
  };

  try {
    await addDoc(collection(db, "clientes"), cliente);
    alert("Cliente registrado");
    document.getElementById("clienteForm").reset();
  } catch (error) {
    alert("Error al guardar cliente: " + error.message);
  }
});
//reserva 
window.guardarReserva = async function () {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const auto = document.getElementById("auto").value;
    const desde = document.getElementById("desde").value;
    const hasta = document.getElementById("hasta").value;

    try {
      await addDoc(collection(db, "reservas_web"), {
        nombre,
        correo,
        telefono,
        auto,
        desde,
        hasta
      });
      alert("✅ ¡Reserva guardada exitosamente!");
    } catch (e) {
      console.error("❌ Error al guardar:", e);
    }
  };
  