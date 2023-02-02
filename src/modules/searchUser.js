


//**************search all userdata by name, email, role***************//
const searchFilter = () => {
    let filter = document.getElementById('search').value.toUpperCase();
    let userTable = document.getElementById('user-table');
    let tr = userTable.getElementsByTagName('tr');
    
    
    for (let i = 0; i < tr.length; i++) {

        let firstCol = tr[i].getElementsByTagName('td')[1];
        let secondCol = tr[i].getElementsByTagName('td')[2];
        let thirdCol = tr[i].getElementsByTagName('td')[3];

        if (firstCol, secondCol, thirdCol) {
            let textFirstCol = firstCol.textContent || firstCol.innerHTML;
            let textSecCol = secondCol.textContent || secondCol.innerHTML;
            let textThirdCol = thirdCol.textContent || thirdCol.innerHTML;

            if (textFirstCol.toUpperCase().indexOf(filter) > -1 || textSecCol.toUpperCase().indexOf(filter) > -1 || textThirdCol.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}