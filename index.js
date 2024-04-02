window.onload = function() {
    showData();
  };
  
  const validForm = () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let age = document.querySelector("#age").value;
  
    if (name === "") {
      alert("Name is required ");
      return false;
    }
  
    if (address === "") {
      alert("Address is required ");
      return false;
    } else if (age < 1) {
      alert("Age is not zero or less than 1");
      return false;
    }
    if (email === "") {
      alert("Email is required");
      return false;
    } else if (!email.includes("@")) {
      alert("Invalid email address");
      return false;
    }
    return true;
  };
  
  const showData = () => {
    let userData;
    if (localStorage.getItem("data") == null) {
      userData = [];
    } else {
      userData = JSON.parse(localStorage.getItem("data"));
    }
    let html = "";
    userData.forEach((element, index) => {
      html += `<tr>
         <td>${element.name}</td>
         <td>${element.email}</td>
         <td>${element.address}</td>
         <td>${element.age}</td>
         <td><button class="btn btn-warning" onclick="updateData(${index})">Edit</button></td>
         <td><button class ="btn btn-danger" onclick="deleteData()">Delete</button></td>
       </tr>`;
    });
    document.querySelector("tbody.data_table").innerHTML = html;
  };
  
  const addData = () => {
    if (validForm()) {
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let address = document.querySelector("#address").value;
      let age = document.querySelector("#age").value;
      let userData;
      if (localStorage.getItem("data") == null) {
        userData = [];
      } else {
        userData = JSON.parse(localStorage.getItem("data"));
      }
  
      userData.push({
        name: name,
        email: email,
        address: address,
        age: age,
      });
      localStorage.setItem("data", JSON.stringify(userData));
      showData();
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#address").value = "";
      document.querySelector("#age").value = "";
    }
  };

  const deleteData = (index) => {
    let userData;
    if (localStorage.getItem("data") == null) {
      userData = [];
    } else {
      userData = JSON.parse(localStorage.getItem("data"));
    }
    userData.splice(index, 1); 
    localStorage.setItem("data", JSON.stringify(userData));
    showData();
  };
  
    
  const updateData = (index)=>{
   document.getElementById("submit").style.display = "none"
   document.getElementById("update").style.display = "block"
   let userData;
   if (localStorage.getItem("data") == null) {
     userData = [];
   } else {
     userData = JSON.parse(localStorage.getItem("data"));
   }
   document.querySelector("#name").value =  userData[index].name;
      document.querySelector("#email").value =  userData[index].email;
      document.querySelector("#address").value =  userData[index].address;
      document.querySelector("#age").value =  userData[index].age;

      document.querySelector('#update').onclick = function(){
        if (validForm()==true) {
            userData[index].name=  document.querySelector("#name").value;
            userData[index].email = document.querySelector("#email").value;
            userData[index].address = document.querySelector("#address").value;
            userData[index].age = document.querySelector("#age").value;
            localStorage.setItem("data" , JSON.stringify(userData))
            showData()
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#address").value = "";
            document.querySelector("#age").value = "";
            document.getElementById("submit").style.display = "block"
            document.getElementById("update").style.display = "none"
        }
      }
     
  }