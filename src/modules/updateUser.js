
//************edit user name, email and role.************//
function editUser(id) {
    console.log("clicked");
    let editBtn = document.getElementById("edit" + id);
    console.log(editBtn)
    editBtn.children[0].style.display = "none";
    let saveBtn = document.getElementById("save" + id);
    console.log(saveBtn)
    saveBtn.style.display = "block";
    let cancelBtn = document.getElementById("cancel" + id);
    cancelBtn.style.display = "block";

    let name = document.getElementById("name" + id);
    let email = document.getElementById("email" + id);
    let role = document.getElementById("role" + id);

    let userName = name.innerHTML;
    let userEmail = email.innerHTML;
    let userRole = role.innerHTML;

    oldUserData.push(userEmail, userName, userRole)
    console.log(oldUserData)

    name.innerHTML = `<input type='text' class="editInput" id='nameInput${id}' value='${userName}'/>`
    email.innerHTML = `<input type='text' class="editInput" id='emailInput${id}' value='${userEmail}'/>`
    role.innerHTML = `<input type='text' class="editInput" id='roleInput${id}' value='${userRole}'/>`
}



//*************save the edited userdata name, email, role or all***************//
function saveEdit(id) {
    let updatedEmail = document.getElementById("emailInput" + id).value;
    let updatedName = document.getElementById("nameInput" + id).value;
    let updatedRole = document.getElementById("roleInput" + id).value;

    oldUserData = [updatedEmail, updatedName, updatedRole]
    console.log(oldUserData)

    document.getElementById("email" + id).innerHTML = updatedEmail;
    document.getElementById("name" + id).innerHTML = updatedName;
    document.getElementById("role" + id).innerHTML = updatedRole;


    let editBtn = document.getElementById("edit" + id);
    console.log(editBtn)
    editBtn.children[0].style.display = "block";
    let saveBtn = document.getElementById("save" + id);
    console.log(saveBtn)
    saveBtn.style.display = "none";
    let cancelBtn = document.getElementById("cancel" + id);
    cancelBtn.style.display = "none";
}



//********* cancel edited data and save the default values**********//
function cancelEdit(id) {
    console.log("clicked")

    let email = document.getElementById("email" + id).children[0];
    let name = document.getElementById("name" + id).children[0];
    let role = document.getElementById("role" + id).children[0];

    if (email.value !== oldUserData[0]) {
        email.value = oldUserData[0]
    }
    if (name.value !== oldUserData[1]) {
        name.value = oldUserData[1]
    }
    if (role.value !== oldUserData[2]) {
        role.value = oldUserData[2]
    }

    let editBtn = document.getElementById("edit" + id);
    console.log(editBtn)
    editBtn.children[0].style.display = "block";
    let saveBtn = document.getElementById("save" + id);
    console.log(saveBtn)
    saveBtn.style.display = "none";
    let cancelBtn = document.getElementById("cancel" + id);
    cancelBtn.style.display = "none";

}




//***********delete selected single row of table (userdata of perticular selected person)************//
function deleteRowItem(id) {
    let deleteBtn = document.querySelector('#deleteRow'+ id)
    let deleteParent = deleteBtn.parentElement.parentElement
    deleteParent.remove()
}



//********** delete all the selected userdata***********//
function deleteAll() {
    let rowCheckbox = document.querySelectorAll(".rowCheckbox");
    // console.log("clicked", rowCheckbox)
    rowCheckbox.forEach(ele => {
        if (ele.checked) {
            let selectedRow = ele.parentElement.parentElement;
            selectedRow.remove();
        }
    })
    let deleteALLItems = document.getElementById('AllEleSelected');
    if (deleteALLItems.checked) {
        deleteALLItems.checked = false;
    }
}




//*************select the entire row of perticular selected person*************//
function selectedCheckBox(id) {
    let checkboxBtn = document.querySelector("#checkbox"+ id)
    let selectedRow = checkboxBtn.parentElement.parentElement;
    console.log("checked", selectedRow)
    if (checkboxBtn.checked == true) {
        selectedRow.classList.add("checked-row");
    } else {
        selectedRow.classList.remove("checked-row");
    }
}




//************selecte entire rows of userdata inside table***********/
function selectAll() {
    let AllEleSelected = document.getElementById("AllEleSelected");
    let tableRow = document.querySelectorAll(".rowCheckbox");
    tableRow.forEach(ele => {
        console.log("click", ele)
        if (AllEleSelected.checked) {
            ele.checked = true;
            ele.parentElement.parentElement.classList.add("checked-row")
        } else {
            ele.checked = false;
            ele.parentElement.parentElement.classList.remove("checked-row")
        }
    })
}

