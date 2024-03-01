let items = document.querySelector(".items");

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) =>
    data.map((d) => {
      let item = `<tr class="text-center">
      <th>${d.id}</th>
      <th class="itemName">${d.name}</th>
      <th class="itemPrice">${d.price}</th>
      <th class="itemDesc">${d.description}</th>
      <th class="p-2"><button  class="edit btn btn-outline-warning">Edit</button>
      <button class="delete btn btn-outline-danger">Delete</button></th>
      </tr>`;

      items.innerHTML += item;

      let btnUpdate = document.querySelector("#update");
      let btnEdit = document.querySelectorAll(".edit");
      let btnDelete = document.querySelectorAll(".delete");

      btnEdit.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let prodName =
            e.target.parentElement.previousElementSibling.previousElementSibling
              .previousElementSibling.innerHTML;
          let prodPrice =
            e.target.parentElement.previousElementSibling.previousElementSibling
              .innerHTML;
          let prodDesc =
            e.target.parentElement.previousElementSibling.innerHTML;
          document.querySelector("#name").value = prodName;
          document.querySelector("#price").value = prodPrice;
          document.querySelector("#description").value = prodDesc;
        });
      });

      btnDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.target.parentElement.parentElement.remove();
        });
      });
    })
  );

let btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => {
  let name = document.querySelector("#name");
  let price = document.querySelector("#price");
  let description = document.querySelector("#description");

  if (name.value !== "" && price.value !== "" && description.value !== "") {
    let addItem = `<tr class="text-center"><th>id</th><th>${name.value}</th><th>${price.value}</th><th>${description.value}</th><th class="p-2"><button class="edit btn btn-outline-warning">Edit</button><button class="delete btn btn-outline-danger">Delete</button></th></tr>`;
    items.innerHTML += addItem;
    name.value = "";
    price.value = "";
    description.value = "";
  } else {
    alert("Vous devez remplir tout les champs");
  }
});
