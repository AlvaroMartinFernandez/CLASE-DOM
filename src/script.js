// Esperar a que el DOM esté completamente cargado antes de agregar eventos
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón por su ID
  const button = document.getElementById("changeContentButton");

  // Asignar la función al evento de clic
  button.addEventListener("click", updateContent);

  console.log("Mensaje por consola.");
});

// Función para modificar el contenido del div utilizando innerHTML
function updateContent() {
  // Obtener el elemento del DOM por su ID
  const contentDiv = document.getElementById("content");

  // Actualizar el contenido del div utilizando innerHTML
  contentDiv.innerHTML = `
      <h2>Nuevo Contenido</h2>
      <p>Este es el nuevo contenido que ha sido insertado utilizando innerHTML.</p>
      <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
        <li>Elemento de lista 3</li>
      </ul>  `;
}
