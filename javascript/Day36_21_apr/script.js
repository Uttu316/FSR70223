var list = [];

function handleForm() {
  const form = document.getElementById("todo-form");

  const submitBtn = document.getElementById("submit-btn");

  let formValues = {};
  form.addEventListener("input", function (event) {
    const { name, value } = event.target;
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
    list.unshift(formValues);
    addListItem(formValues);
    form.reset();
    formValues = {};
    submitBtn.disabled = true;
  });
}

function validation(formValues) {
  const { title, description } = formValues;

  let isTitleValidated = false;
  let isDescriptionValidated = false;

  if (title.trim().length >= 2) {
    isTitleValidated = true;
  }

  if (description.trim().length >= 5) {
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
  const parentId = "accordian_parent_" + list.length;
  itemContainer.id = parentId;

  const header = document.createElement("h2");
  header.classList.add("accordion-header");

  const id = "accordian_" + list.length;

  const accButton = document.createElement("button");
  accButton.classList.add("accordion-button");
  accButton.setAttribute("data-bs-toggle", "collapse");
  accButton.setAttribute("data-bs-target", "#" + id);
  accButton.innerHTML = formValues.title;

  const dltBtn = document.createElement("button");
  dltBtn.classList.add("btn");
  dltBtn.classList.add("btn-sm");
  dltBtn.classList.add("btn-danger");
  dltBtn.innerHTML = "Delete";

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn");
  editBtn.classList.add("btn-sm");
  editBtn.classList.add("btn-secondary");
  editBtn.classList.add("me-2");
  editBtn.innerHTML = "Edit";
  editBtn.setAttribute("data-bs-toggle", "modal");
  editBtn.setAttribute("data-bs-target", "#editFormModal");

  dltBtn.addEventListener("click", function () {
    handleDeleteItem(parentId);
  });

  editBtn.addEventListener("click", function () {
    handleEditItem(parentId);
  });

  header.append(accButton);

  const collapse = document.createElement("div");
  collapse.classList.add("accordion-collapse");
  collapse.classList.add("collapse");
  collapse.id = id;

  const collapseBody = document.createElement("div");
  collapseBody.classList.add("accordion-body");
  collapseBody.innerHTML = formValues.description;

  const footer = document.createElement("div");
  footer.classList.add("d-flex");
  footer.classList.add("justify-content-end");
  footer.classList.add("align-items-center");
  footer.classList.add("p-2");

  footer.append(editBtn);
  footer.append(dltBtn);

  collapse.append(collapseBody);
  collapse.append(footer);

  itemContainer.append(header);
  itemContainer.append(collapse);

  const listContainer = document.getElementById("todo_list");
  listContainer.prepend(itemContainer);
  const listStatus = document.getElementById("list-status");
  listStatus.classList.replace("d-block", "d-none");
}

function handleDeleteItem(elementId) {
  const elementToDlt = document.getElementById(elementId);
  const targetIndex = getElementIndex(elementId);
  if (targetIndex != -1) {
    list.splice(targetIndex, 1); // remove from list
  }
  elementToDlt.remove(); // remove from ui

  if (list.length === 0) {
    const listStatus = document.getElementById("list-status");
    listStatus.classList.replace("d-none", "d-block");
  }
}

function getElementIndex(elementId) {
  const elementToDlt = document.getElementById(elementId);

  const {
    parentNode: { childNodes: allChildren },
  } = elementToDlt||{};

  let targetIndex = -1;
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i].id === elementId) {
      targetIndex = i;
      break;
    }
  }
  return targetIndex;
}

function handleEditItem(elementId) {
  // show form with current values
  fillEditForm(elementId);
  const editForm = document.getElementById("editFormModal");
  editForm.setAttribute("data-for", elementId);
  handleEditForm(elementId);
}

function fillEditForm(elementId) {
  const targetIndex = getElementIndex(elementId);
  const formValues = list[targetIndex];

  const titleInput = document.querySelector("#todo-edit-form #edit_title");
  titleInput.value = formValues.title;

  const descInput = document.querySelector("#todo-edit-form #edit_description");
  descInput.value = formValues.description;
}

function handleEditForm(elementId) {
  const editFormModal = document.getElementById("editFormModal");
  const editForm = document.getElementById("todo-edit-form");

  const saveBtn = document.getElementById("save-btn");
  const currentElementId = editFormModal.getAttribute("data-for");
  if (currentElementId === elementId) {
    let targetIndex = getElementIndex(elementId);
    const oldValues = list[targetIndex];

    let formValues = {
      title: oldValues.title,
      description: oldValues.description,
    };
    editForm.addEventListener("input", function (event) {
      const value = event.target.value;
      const name = event.target.name;
      formValues[name] = value;

      const isValidate = validation(formValues);

      if (isValidate) {
        saveBtn.disabled = false;
      } else {
        saveBtn.disabled = true;
      }
    });
    handleSaveButton(elementId, formValues);
  }
}

function handleSaveButton(elementId, formValues) {
  const saveBtn = document.getElementById("save-btn");
  saveBtn.addEventListener("click", function () {
    // after submit edit form, close the form
    const editFormModal = document.getElementById("editFormModal");
    const currentElementId = editFormModal.getAttribute("data-for");
    if (elementId === currentElementId) {
      let targetIndex = getElementIndex(elementId);
      // update our ui and list
      list[targetIndex] = formValues;
      updateListItem(elementId, formValues);
      closeEditForm();
    }
  });
}

function closeEditForm() {
  const closeBtn = document.getElementById("edit-form-close-btn");
  closeBtn.click();
}

function updateListItem(elementId, formValues) {
  const titleElement = document.querySelector(
    "#" + elementId + " .accordion-button"
  );
  titleElement.innerHTML = formValues.title;

  const descElement = document.querySelector(
    "#" + elementId + " .accordion-body"
  );
  descElement.innerHTML = formValues.description;
}
handleForm();
