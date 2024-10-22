const searhbutton = document.querySelector('.search-button');
const searchtxtbox = document.querySelector("#searchbook") ;
const navbar = document.querySelector(".filter-element") ; 
const filter_fields = document.querySelectorAll(".filter-element") ; 


searhbutton.addEventListener('click' , ()=>{
    navbar.classList.add('hide');
    searchtxtbox.classList.remove('hide') ; 
    searchtxtbox.focus();  
}) 

searchtxtbox.addEventListener('blur' ,()=> {
    navbar.classList.remove('hide');    
    searchtxtbox.classList.add('hide');    
});

filter_fields.forEach((button) => {
    button.addEventListener('click', function () {
      // Remove 'active' class from all buttons
      filter_fields.forEach((btn) => btn.classList.remove('selected'));
  
      // Add 'active' class to the clicked button
      button.classList.add('selected');
    });
  });
