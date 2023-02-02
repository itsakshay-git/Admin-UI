let pageNo = 1;
let rowsPerPage = 10;


//***********do pagination functionality***********/
function pagination(){
    const totalRows = document.querySelectorAll(`#table-body tr`);
    console.log(totalRows);
    const rows = totalRows.length;
    const totalPage = Math.ceil(rows / rowsPerPage);
    console.log(totalPage);
    currentGenratedPage();
    showTableRows();
 
//**************show total rows on table example(max 10 rows)**********/
    function showTableRows() {
        
        const tableBody = document.getElementById("table-body");
        
        
        let firstIndex = (pageNo - 1) * rowsPerPage;
        let lastIndex = firstIndex + (rowsPerPage - 1);
    
        if (lastIndex >= rows) {
            lastIndex = rows - 1;
        }
    
        let statement = "";
        for (let i = firstIndex; i <= lastIndex; i++) {
            statement += `<tr>${totalRows[i].innerHTML}</tr>`
        }
        tableBody.innerHTML = statement;
    
        document.querySelectorAll(".pageNos").forEach(ele => {
            ele.classList.remove("active");
            console.log(ele)
        });
        document.getElementById(`pageno${pageNo}`).classList.add('active')

    
        if (pageNo == 1) {
            let reverseBtn = document.getElementById('prv-btn')
            reverseBtn.classList.add('disabled')
            let startBtn = document.getElementById('start-btn')
            startBtn.classList.add('disabled')
        } else {
            let reverseBtn = document.getElementById('prv-btn')
            reverseBtn.classList.remove('disabled')
            let startBtn = document.getElementById('start-btn')
            startBtn.classList.remove('disabled')
        }

        if (pageNo == totalPage) {
            let forwardBtn = document.getElementById('nxt-btn')
            forwardBtn.classList.add('disabled')
            let endBtn = document.getElementById('end-btn')
            endBtn.classList.add('disabled')
        } else {
            let forwardBtn = document.getElementById('nxt-btn')
            forwardBtn.classList.remove('disabled')
            let endBtn = document.getElementById('end-btn')
            endBtn.classList.remove('disabled')
        }
    
    
    }
    
    
//************shows userdata of current page & navigate between pages (page-buttons)************/  
    function currentGenratedPage() {


        //start button
        let startBtn = document.createElement('button');
        startBtn.classList.add("page-btn");
        startBtn.setAttribute("type", "button");
        startBtn.setAttribute("id", "start-btn");
        startBtn.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
        </svg>`

        document.getElementById("pagination-buttons").append(startBtn)
        startBtn.addEventListener("click", function(){
            pageNo = 1;
            showTableRows()
        })



        //prev buttom
        let prevBtn = document.createElement('button');
        prevBtn.classList.add("page-btn");
        prevBtn.setAttribute("type", "button");
        prevBtn.setAttribute("id", "prv-btn");
        prevBtn.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>`

        document.getElementById("pagination-buttons").append(prevBtn)
        prevBtn.addEventListener("click", function(){
            pageNo--;
            showTableRows();
        })



        //buttons
        let button;
        
        for (let i = 1; i <= totalPage; i++) {
            button = document.createElement('button');
            button.setAttribute('id', `pageno${i}`);
            button.setAttribute('type', 'button');
            button.classList.add('page-btn','pageNos')
            button.innerText = i
            if (i == 1) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
            document.getElementById("pagination-buttons").append(button)
            button.addEventListener("click", function(){
                pageNo = parseInt(i);
                showTableRows();
            })
        }



        //next button
        let nextBtn = document.createElement('button');
        nextBtn.classList.add("page-btn");
        nextBtn.setAttribute("type", "button");
        nextBtn.setAttribute("id", "nxt-btn");
        nextBtn.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>`

        document.getElementById("pagination-buttons").append(nextBtn)
        nextBtn.addEventListener("click", function(){
            if(pageNo < totalPage){
                pageNo++;
                showTableRows();
            }
        })


        //end button
        let endBtn = document.createElement('button');
        endBtn.classList.add("page-btn");
        endBtn.setAttribute("type", "button");
        endBtn.setAttribute("id", "end-btn");
        endBtn.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
        </svg>`

        document.getElementById("pagination-buttons").append(endBtn)
        endBtn.addEventListener("click", function(){
            pageNo = totalPage;
            showTableRows();
        })


    }
    
}


