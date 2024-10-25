const searhbutton = document.querySelector('.search-button');
const searchtxtbox = document.querySelector("#searchbook") ;
const navbar = document.querySelector(".nav-elemnts") ; 
const filter_fields = document.querySelectorAll(".filter-element") ; 
const savebookMark = document.querySelector(".save-bookMark") ; 

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


savebookMark?.addEventListener('click' , ()=>{
    console.log(savebookMark.src);
    
    if (savebookMark.src == "http://127.0.0.1:5500/assets/bookmark-simple-unfill.svg") {
        savebookMark.src = "./../assets/bookmark-simple-fill.svg"
    }
    else {
        savebookMark.src = "./../assets/bookmark-simple-unfill.svg" ; 
    }
})


