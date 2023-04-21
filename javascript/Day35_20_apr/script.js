var list = [];

function handleForm() {
  const form = document.getElementById("todo-form");

  const submitBtn = document.getElementById("submit-btn");

  let formValues = {};
  form.addEventListener("input", function (event) {
    const value = event.target.value;
    const name = event.target.name;
    formValues[name] = value;

    const isValidate = validation(formValues);

    if (isValidate) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevents  auto submition and reloading of the form;
    list.push(formValues);
    addListItem(formValues);
    form.reset();
    submitBtn.disabled = true;
  });
}

function validation(formValues) {
  const title = formValues.title || "";
  const description = formValues.description || "";

  let isTitleValidated = false;
  let isDescriptionValidated = false;

  if (title.trim().length >= 10) {
    isTitleValidated = true;
  }

  if (description.trim().length >= 30) {
    isDescriptionValidated = true;
  }

  if (isTitleValidated && isDescriptionValidated) {
    return true;
  } else {
    return false;
  }
}

function addListItem(formValues) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("accordion-item");

  const header = document.createElement("h2");
  header.classList.add("accordion-header");

  const id = list.length + "_accordian";

  const accButton = document.createElement("button");
  accButton.classList.add("accordion-button");
  accButton.setAttribute("data-bs-toggle", "collapse");
  accButton.setAttribute("data-bs-target", "#" + id);
  accButton.innerHTML = formValues.title;

  const dltBtn = document.createElement("button");
  dltBtn.innerHTML = "Delete";

  dltBtn.addEventListener("click", handleDeleteItem);

  accButton.append(dltBtn);

  header.append(accButton);

  const collapse = document.createElement("div");
  collapse.classList.add("accordion-collapse");
  collapse.classList.add("collapse");
  collapse.classList.add("show");
  collapse.id = id;

  const collapseBody = document.createElement("div");
  collapseBody.classList.add("accordion-body");
  collapseBody.innerHTML = formValues.description;

  collapse.append(collapseBody);

  itemContainer.append(header);
  itemContainer.append(collapse);

  const listContainer = document.getElementById("todo_list");
  listContainer.prepend(itemContainer);
  const listStatus = document.getElementById("list-status");
  listStatus.classList.replace("d-block", "d-none");
}

function handleDeleteItem(event) {
    console.log("delele me");
    // delete current element from ui and list variable
    
  if (list.length === 0) {
    const listStatus = document.getElementById("list-status");
    listStatus.classList.replace("d-none", "d-block");
  }


  
}
handleForm();
