<!DOCTYPE html>

<html> 

   <head><meta charset=utf-8 />
      <title>Change the content of a cell</title>
      </head><body>
      <table id="myTable" border="1">
      <tr><td>Row1 cell1</td>
      <td>Row1 cell2</td></tr>
      <tr><td>Row2 cell1</td>
      <td>Row2 cell2</td></tr>
      <tr><td>Row3 cell1</td>
      <td>Row3 cell2</td></tr>
      </table><form>
      <input type="button" onclick="changeContent()" value="Change content">
      </form>
   </body>

    <script>
         function changeContent(){
            let rowInput = window.prompt("select row between(0,1,2)");
            let columnInput = window.prompt("select cell between(0 & 1)");
            let inputValue = window.prompt("Input the value");

            //let getTD = document.querySelectorAll("td");
            let getTable = document.getElementById("myTable");
            let x = getTable.rows[parseInt(rowInput)];
            console.log("pk",inputValue)
           x.cells[parseInt(columnInput)].innerText = inputValue;
           
        };


    </script>
</html>


<!DOCTYPE html>

<html> 

     <head>
        <meta charset=utf-8 />
        <title>Return first and last name from a form - w3resource</title>
        </head>

        <body>
        <form id="form1">
        First name: <input type="text" name="fname" value="David"><br>
        Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
        </form>
        </body>

    <script>
   let PINCODE = prompt("kindly enter PinCode");
const url = `https://api.postalpincode.in/pincode/${PINCODE}`;     //API url

const CreateReq = function(url){                 // creating a req 
    let httpRequest = new XMLHttpRequest(url);                    //In AJAX API request are XHR type
    httpRequest.addEventListener("readystatechange", (url)=>{    // XHR code listen to this event 'readystatechange' and then check status
      CheckStatus(httpRequest);  
    })

    httpRequest.open("GET",url);            // connecting with url and using get method to get the data
    httpRequest.send();                     //with this req is actually being sent 
};

const getPincode = function(data){
   console.log("Area under this PinCode are:",data);
};

const getError = function(error){
   console.log("error:", error)
};

const CheckStatus = function(httpRequest){
   console.log("checkData",httpRequest.readyState,httpRequest.status);
   if(httpRequest.readyState === 4){            
      if(httpRequest.status === "Success"){
         getPincode(httpRequest.responseText);
      }
      else
      {
         getError(httpRequest.status+':'+httpRequest.responseText);
      }
}
};


CreateReq(url);
    </script>
</html>

<!DOCTYPE html>

<html> 
   <head>
      <meta charset=utf-8 />
      <title>Remove items from a dropdown list</title>
      </head>
      <body>
         <form>
      <select id="colorSelect">
      <option>Red</option>
      <option>Green</option>
      <option>White</option>
      <option>Black</option>
      </select>
      <input type="button" onclick="removecolor()" value="Select and Remove">
        </form>
   </body>

    <script>
   function removecolor(){
      let dropdown = document.getElementById("colorSelect");
      console.log(dropdown.selectedIndex);
      if(dropdown.selectedIndex >= 0){
         dropdown.remove(dropdown.selectedIndex);
      }
      else
      {console.error("nothing to remove");}
     
   }
    </script>
</html>

<!DOCTYPE html>

<html> 

     <head>
        <meta charset=utf-8 />
        <title>Return first and last name from a form - w3resource</title>
        </head>

        <body>
        <form id="form1">
        First name: <input type="text" name="fname" value="David"><br>
        Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
        </form>
        </body>

    <script>
   let getForm = document.querySelector("input:last-child");
   console.log(getForm);
let fName = document.querySelectorAll("input");

const getFormvalue = function(e){
   e.preventDefault();
console.log("entering fun");
var textArea = document.createElement("div");
textArea.innerHtml = `
   <h1>${fName[0].value}</h1> 
   <h1>${fName[1].value}</h1> 
   `;
console.log(textArea);
document.body.append(textArea);  
console.log(document.body);
};

getForm.addEventListener("click", getFormvalue, false);
  
</script>
</html>

<!DOCTYPE html>

<html> 

     <head>
        <meta charset=utf-8 />
        <title>Return first and last name from a form - w3resource</title>
        </head>

        <body>
        <form id="form1">
        First name: <input type="text" name="fname" value="David"><br>
        Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
        </form>
        </body>

    <script>
   let getForm = document.querySelector("input:last-child");
   console.log(getForm);
let fName = document.querySelectorAll("input");

const getFormvalue = function(){
console.log("entering fun");
var textArea = document.createElement("p");
textArea.innerHtml = `
   <h1>${fName[0].value}</h1> 
   <h1>${fName[1].value}</h1> 
   `;
console.log(textArea);
document.body.append(textArea);  
console.log(document.body);
};

getForm.addEventListener("click", getFormvalue, false);
  
</script>
</html>

<!DOCTYPE html>

<html> 

     <head>
        <meta charset=utf-8 />
        <title>Return first and last name from a form - w3resource</title>
        </head>

        <body>
        <form id="form1">
        First name: <input type="text" name="fname" value="David"><br>
        Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
        </form>
        </body>

    <script>
   let getForm = document.querySelector("input:last-child");
   console.log(getForm);
let fName = document.querySelectorAll("input");

const getFormvalue = function(e){
   e.preventDefault();
console.log("entering fun");
var textArea = document.createElement("div");
textArea.innerHTML = `
   <h1>${fName[0].value}</h1> 
   <h1>${fName[1].value}</h1> 
   `;
console.log(textArea);
document.body.append(textArea);  
console.log(document.body);
};

getForm.addEventListener("click", getFormvalue, false);
  
</script>
</html>

<!DOCTYPE html>

<html> 
   <head>
               <meta charset=utf-8 />
         <style type="text/css">
        body {margin: 30px;}
         </style>   
         <button id="btn">Show Image</button>
         <div>
            <img src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg" alt="x" width: "240", height: "160">
            <img src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg" style="display:none" alt="y" width: "240", height: "160">
            <img src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg" style="display:none" alt="z" width: "240", height: "160">
         </div>
   </body>

    <script>
    document.getElementById("btn").addEventListener("click", ()=>{
      let displayimg = document.querySelector("div");
      
      displayimg.addstyle.display ='none';
      console.log(displayimg);
      let showMe = document.querySelectorAll("img");
      let i = Math.floor(Math.random() * 3);
      displayimg.style.removeProperty("display");
      showMe[i].style.removeProperty('display');
   });
    
    </script>
</html>

<!DOCTYPE html>

<html> 
   <head>
               <meta charset=utf-8 />
         <style type="text/css">
        body {margin: 30px;}
         </style>   
         <title>Input radius value and get the volume of a sphere.</title>
         </head><body><form>
            Input radius value and get the volume of a sphere.
            <p>Radius</p>  
            <input type="text" value="">
            <p>Volume</p>  
            <input type="text"value="0.00">
         <input type="button" onclick="getOptions()" value="Count and Output all items">
         </form>
   </body>

    <script>
      function getOptions(){
         let data = document.querySelectorAll("input");
         let radius = data[0].value;
         let volume = 4*3.14*radius*radius*radius;
         data[1].value = volume;
      }
    
    </script>
</html>

<!DOCTYPE html>

<html> 
   <head>
      <meta charset=utf-8 />
      <title>Change the content of a cell</title>
      <style type="text/css">
      body {margin: 30px;}
      </style>  
      </head>
      <body>
      <table id="myTable" border="1">
      </table>
      <form>
      <input type="button" onclick="createTable()" value="Create the table">
      </form>
   
   </body>

    <script>
      function createTable(){
            let rowInput = window.prompt("select no of row between");
            let columnInput = window.prompt("select no of cell");
            
            let getTable = document.getElementById("myTable");

            for(i=0; i < rowInput; i++){
              let row = getTable.insertRow();
               for(j=0; j< columnInput; j++){
                let col = row.insertCell();
                console.log("col",col);
                col.innerText = "row"+i+"column"+j;
               }
            }
      };
   

    </script>
</html>

<!DOCTYPE html>

<html> 

    <head><meta charset=utf-8 />
        <title>Insert row in a table - w3resource</title>
        </head><body>
        <table id="sampleTable" border="1">
        <tr><td>Row1 cell1</td>
        <td>Row1 cell2</td></tr>
        <tr><td>Row2 cell1</td>
        <td>Row2 cell2</td></tr>
        </table><br>
        <input type="button" onclick="insert_Row()" value="Insert row"> 
        </body>

    <script>
        
        let getTable =  document.getElementById("sampleTable");
 

        

        let row = 3;

        function insert_Row(){
            let addContent = document.createElement("tr");

            console.log(row);

            addContent.innerHTML = `
           <td>Row${row}cell1</td>
           <td>Row${row}cell2</td>
           `;
           row++;
            getTable.append(addContent)

       
        }
        
   
    </script>
</html>


'use strict';
let PINCODE = prompt("kindly enter PinCode");
const url = `https://api.postalpincode.in/pincode/${PINCODE}`;

const getPincode = function(url){
    let httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener("readystatechange", (url)=>{
        if(httpRequest.readyState === 4){
            console.log("Area under this PinCode are:",httpRequest.responseText);
        }
        else
        {
            console.log("Not a valid PinCode.")
        }
        
    })

    httpRequest.open("GET",url);
    httpRequest.send();
};

getPincode(url);

{
    "@context": "http://www.schema.org",
    "type": "person",
    "name": "Anshul Kothari",
    "worksFor": "CNH",
    "workLocation": "Cyber city Gurgaon",
    "jobTitle": "Software Virtualization Engg."
}
<!DOCTYPE html>

<html> 

     <head>
        <meta charset=utf-8 />
        <title>Return first and last name from a form - w3resource</title>
        <script type="aplication/ld+json">
         {
         "@context": "https://schema.org/",
         "@type": "person",
         "name": "Anshul Kothari",
         "worksFor": "CNH",
         "jobTitle": "Software Virtualization Engg."
         "address": {
            "@type": "PostalAddress",
            "streetAddress": "cyber city",
            "addressLocality": "Gurgaon",
            "addressRegion": "haryana"
         }
         }
        </script>
        </head>

        <body>
        <form id="form1">
        First name: <input type="text" name="fname" value="David"><br>
        Last name: <input type="text" name="lname" value="Beckham"><br>
        <input type="submit" value="Submit">
        </form>
        </body>

    <script>
   let getForm = document.querySelector("input:last-child");
   console.log(getForm);
let fName = document.querySelectorAll("input");

const getFormvalue = function(e){
   e.preventDefault();
console.log("entering fun");
var textArea = document.createElement("div");
textArea.innerHTML = `
   <h1>${fName[0].value}</h1> 
   <h1>${fName[1].value}</h1> 
   `;

console.log(textArea);
document.body.append(textArea);

};

getForm.addEventListener("click", getFormvalue, false);
  
    </script>
</html>
