// Array original de personas
let personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 40 },
];

// Copia por referencia directa (normal)
let copiaNormal = personas;

// Shallow copy (Copia superficial) con spread operator
let shallowCopy = [...personas];

// Deep copy (Copia profunda) usando JSON
let deepCopy = JSON.parse(JSON.stringify(personas));

// Modificamos el array original
personas[0].nombre = "Carlos"; // Cambiamos el nombre de la primera persona
personas.push({ nombre: "Laura", edad: 22 }); // Añadimos una nueva peclear
rsona al array original

// Mostramos los resultados
console.log("Original:", personas);
console.log("Copia Normal:", copiaNormal);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);
