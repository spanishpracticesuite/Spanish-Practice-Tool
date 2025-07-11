const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzDVvtRFmTC5hOmXbC--hQ0cfkkx5vZ5xUzKwnmyG51-UtfyBCnpPkoJTOHIDFzLVJ-/exec";

// 🎯 This is the function Apps Script will call when sending back student data
function handleStudentProfile(data) {
  if (data.error) {
    alert("Estudiante no encontrado.");
  } else {
    displayStudentProfile(data);
  }
}

// 🚀 Creates a <script> tag to load data from Apps Script using JSONP
function loadStudentData() {
  const studentID = document.getElementById("studentCode").value.trim();
  if (!studentID) {
    alert("Por favor ingresa un código válido.");
    return;
  }

  const jsonpURL = `${WEB_APP_URL}?action=getStudentData&studentID=${studentID}&callback=handleStudentProfile`;
  const script = document.createElement("script");
  script.src = jsonpURL;
  document.body.appendChild(script);
}

// 🧾 Display student profile in the interface
function displayStudentProfile(data) {
  const div = document.getElementById("studentProfile");
  div.innerHTML = `
    <h2>Bienvenido: ${data["Número de Estudiante (Proveído por la profesora)"]}</h2>
    <p><strong>🎬 Películas:</strong> ${data["🎬 Géneros de Películas (Selecciona todos los que te gusten)"]}</p>
    <p><strong>⚽ Deportes:</strong> ${data["⚽ Deportes (Selecciona todos los que te interesen)"]}</p>
    <p><strong>🍕 Comida:</strong> ${data["🍕 Comida (Selecciona todas las que te gusten)"]}</p>
    <p><strong>📚 Libros:</strong> ${data["📚 Libros/Lectura (Selecciona todos los que te gusten)"]}</p>
    <p><strong>🎨 Pasatiempos:</strong> ${data["🎨 Pasatiempos/Actividades (Selecciona todos los que practiques)"]}</p>
    <p><strong>🧠 Enfoque Actual:</strong> ${data["Enfoque_Actual"]}</p>
  `;
  div.style.display = "block";
}

// 🔘 Attach the click handler
document.getElementById("loadProfileBtn").addEventListener("click", loadStudentData);