import { type Book } from "../services/OpenLibrary";

function BookList({books}:{books:Book[]}){
    return(
        <div>
            {books.map((book) =>(
                <div key={book.key}>
                    
                    <h2>{book.title}</h2>
                    <p>{book.author_name?.join(", ")}</p>
                    <p>{book.first_publish_year}</p>
                
                </div>
            ))}
        </div>
    )
}
export default BookList