import { useState } from "react"
import SearchBar from "../components/SearchBar"
import styles from "./Home.module.css"
import {searchBook} from "../services/OpenLibrary"
import { type Book } from "../services/OpenLibrary"
import BookList from "../components/BookList"

function Home(){

    const [title,setTitle] = useState("")
    const [books,setBooks] = useState<Book[]>([])
    
    const search = async () =>{
        const result = await searchBook(title)

        setBooks(result.docs)
       
    }


    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <SearchBar title={title} setTitle={setTitle} search={search}/>
            <BookList books={books}/>
        </div>
    )
}
export default Home