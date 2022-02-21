console.log("Carge controlador");

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
  } else {
    alert("No has escrito nada, agrega un texto");
  }

  for (i = 0; i <= items.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let check = document.createElement("td");
    let td = document.createElement("td");
    let input = document.createElement("input");
    let contenido = document.createTextNode(items[i].text);

    tr.setAttribute("class", "border-0");
    td.setAttribute("class", "text-center w-100");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "form-check-input p-2 my-2");

    table.appendChild(tr);
    tr.appendChild(check);
    check.appendChild(input);
    tr.appendChild(td);
    td.appendChild(contenido);
  }
}
