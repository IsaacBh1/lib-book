import { books } from "./repo.js";

function createBookItem(title, description, starRating, bookImageUrl) {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';


    const bookImage = document.createElement('img');
    bookImage.src = bookImageUrl;
    bookImage.alt = title;
    bookImage.className = 'book-image';


    const bookInfos = document.createElement('div');
    bookInfos.className = 'book-infos';

    const bookDescription = document.createElement('div');
    bookDescription.className = 'book-description';

    const bookTitle = document.createElement('h3');
    bookTitle.className = 'book-title';
    bookTitle.textContent = title;

    const bookDescParagraph = document.createElement('p');
    bookDescParagraph.className = 'book-description';
    bookDescParagraph.textContent = "year : "+description ;

    const starDiv = document.createElement('div');
    starDiv.className = 'star-div';

    const starsList = document.createElement('ul');
    starsList.className = 'stars-list';

    for (let i = 1; i <= 5; i++) {
        const starItem = document.createElement('li');
        const starImage = document.createElement('img');
        starImage.className = `star star${i}`;
        starImage.src = i <= starRating 
        ? './../assets/star-fill.svg' 
            : './../assets/star.svg';
        starImage.alt = 'star';
        starItem.appendChild(starImage);
        starsList.appendChild(starItem);
    }

    
    starDiv.appendChild(starsList);

    bookDescription.appendChild(bookTitle);
    bookDescription.appendChild(bookDescParagraph);
    bookDescription.appendChild(starDiv);
    
    const bookmarkImage = document.createElement('img');
    bookmarkImage.src = './../assets/bookmark-simple-unfill.svg';
    bookmarkImage.alt = 'save';
    bookmarkImage.className = 'save-bookMark';
    // bookmarkImage.click ;
    // i should hundle this click later  
    bookInfos.appendChild(bookDescription);
    bookInfos.appendChild(bookmarkImage);

    
    bookItem.appendChild(bookImage);
    bookItem.appendChild(bookInfos);

    return bookItem;
}


const bookContainer = document.querySelector('.books');


function LoadBooksToUI(){
    console.log('hello');
    books.forEach( (a) => {
        let newbook = createBookItem(
            a['title'] , 
            a['year'] , 
            a['year']%6 , 
            a['link'] );
            bookContainer.append(newbook); 
        
        });
}

LoadBooksToUI(); 