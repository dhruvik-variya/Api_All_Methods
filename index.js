import ApiData from "./component/method.js";

let id = -1;
const handleSubmit = (e) =>{

    e.preventDefault();

    let student = {
        img : document.getElementById("img").value,
        name : document.getElementById("name").value,
        grid : document.getElementById("grid").value,
        course : document.getElementById("course").value,

    };
    console.log(student);
    // Uimaker(student)
    
    if(id == -1){
        console.log(true);
        
        ApiData.post(student)
    }
    else{
        ApiData.patch(id,student)
    }

    window.location.reload();

}
document.getElementById("form").addEventListener("submit",handleSubmit);


// update

const handleUpdate = (ele) => { 

    document.getElementById("img").value = ele.img;
    document.getElementById("name").value = ele.name;
    document.getElementById("grid").value = ele.grid;
    document.getElementById("course").value = ele.course;

    id =ele.id
}

// display
const Uimaker = async (data)=>{
    
    
    document.getElementById("studentList").innerHTML = "";

    data.map((ele) => {
        let div = document.createElement("div");
        div.className = "studentData";

        let img = document.createElement("img");
        img.src = ele.img;

        let name = document.createElement("p");
        name.textContent =  `Name: ${ele.name}`;

        let grid = document.createElement("p");
        grid.textContent = `Grid: ${ele.grid}`;

        let course = document.createElement("p");
        course.textContent =  `Course: ${ele.course}`;

        // delete
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "deleteButton"
        delBtn.addEventListener("click", () => {
            ApiData.delete(ele.id)
            window.location.reload()
        })

        // update 
        let editBtn = document.createElement("button");
        editBtn.textContent = "Update";
        editBtn.addEventListener("click", () => handleUpdate(ele));

        div.append(img, name, grid, course,delBtn,editBtn);
        document.getElementById("studentList").append(div)
    })
}

const getStudent = async () => {
    console.log(await ApiData.get());
    Uimaker(await ApiData.get());
    
}


getStudent();