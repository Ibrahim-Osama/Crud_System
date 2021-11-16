var productnameinput = document.getElementById('productnameinput');
var productpriceinput = document.getElementById('productpriceinput');
var productcatinput = document.getElementById('productcatinput');
var productdecinput = document.getElementById('productdecinput');
var searchinput = document.getElementById('searchii');
var btn = document.getElementById("btn");
var cinex= 0;

    btn.addEventListener("click",function()
    {
        if (btn.innerHTML == "add product")
        {
           
            send();
            
        }
        else
        {
            
            saveupdatedata();
            
         
           

        }
        
        
    });






var productlist ;  


if (localStorage.getItem("Myproducts") == null)
{
    productlist = [];
}
else
{
  productlist = JSON.parse (localStorage.getItem("Myproducts"));
   display();

}

function send()
{
    

    var productopp =
    {
        name:productnameinput.value,
        price:productpriceinput.value,
        cat:productcatinput.value,
        dec:productdecinput.value
    };
      productlist.push(productopp);
      localStorage.setItem("Myproducts",JSON.stringify(productlist) );
      display();
      cls()

    
}

function display()
{
    var cartonna =  "";
    for(i=0; i<productlist.length; i++ )
    {
        cartonna +=`<tr> 
          <td>${i}</td>
          <td>${productlist[i].name}</td>
          <td>${productlist[i].price}</td>
           <td>${productlist[i].cat}</td> 
           <td>${productlist[i].dec}</td>
           <td> <button class="btn btn-warning" onclick="updatedata(${i})" >update</button></td>
           <td>  <button class="btn btn-danger"  onclick="deleteproduct(${i})">delete</button></td>
           </tr>`;
    }
    document.getElementById('tbody').innerHTML = cartonna;
   

}


function cls()
{
    // remove value input after click 
    productnameinput.value = "";
    productpriceinput.value = "";
    productcatinput.value = "";
    productdecinput.value = "";
}

function deleteproduct(index)
{
    productlist.splice(index,1)    
    localStorage.setItem("Myproducts",JSON.stringify(productlist) );
    display();
}
function deleteall()
{
    productlist.splice(0,9999999999999);
    localStorage.setItem("Myproducts",JSON.stringify(productlist) );
    display();
}

function search()
{
    var term = searchinput.value;
    var wantedproduct = [];
    for( i=0; i<productlist.length; i++)
    {
        // if(productlist[i].name.toLowerCase()  == term.toLowerCase()) في حاله المقارنه بالحروف بظبط 
        if(productlist[i].name.toLowerCase().includes(term.toLowerCase()) || productlist[i].price.toLowerCase().includes(term.toLowerCase()) ||productlist[i].dec.toLowerCase().includes(term.toLowerCase()) || productlist[i].cat.toLowerCase().includes(term.toLowerCase()))  // هل يحتوي علي اي حرف من كلمه 
        {
          
           
            wantedproduct.push(productlist[i]);
           
        }

        

    }
    var cartonna =  "";
    for(i=0; i<wantedproduct.length; i++ )
    {
        cartonna +=`<tr> 
          <td>${i}</td>
          <td>${wantedproduct[i].name}</td>
          <td>${wantedproduct[i].price}</td>
           <td>${wantedproduct[i].cat}</td> 
           <td>${wantedproduct[i].dec}</td>
           <td> <button class="btn btn-warning">update</button></td>
           <td>  <button class="btn btn-danger"  onclick="deleteproduct(${i})">delete</button></td>
           </tr>`;
    }
    document.getElementById('tbody').innerHTML = cartonna;
}



function updatedata(index)
{

    cinex= index ;
    productnameinput.value=productlist[index].name;
    productpriceinput.value=productlist[index].price;
    productcatinput.value=productlist[index].cat;
    productdecinput.value=productlist[index].dec;
    btn.innerHTML = "update";



}

function saveupdatedata()
{

    var product = 
    {
        name:productnameinput.value,
        price:productpriceinput.value,
        cat:productcatinput.value,
        dec:productdecinput.value,
    }
        productlist[cinex] = product;
   
    localStorage.setItem("Myproducts",JSON.stringify(productlist) );
      display();
      cls();
      btn.innerHTML = "add product";
 
 

}
