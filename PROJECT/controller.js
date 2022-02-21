console.log("Cargo controlador");

function cleartable() {
  var range = document.createRange();
  range.selectNodeContents(document.getElementById("table"));
  range.deleteContents();
}

//Agregar elemento
function addItem(algo) {
  cleartable();
  let element = {
    text: "",
    completed: false
  };

  if (algo != "") {
    element.text = algo;
    items.push(element);
    document.getElementById("task").value = "";
    console.log("Se agrego correctamente");
    view();
  } else {
    alert("No has escrito nada, agrega un texto");
  }
}
