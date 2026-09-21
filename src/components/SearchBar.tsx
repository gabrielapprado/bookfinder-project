import { CiSearch } from "react-icons/ci"
import styles from "./SearchBar.module.css"
function SearchBar({
    title,
    setTitle,
    search
}: {
    title: string;
    setTitle: (title: string) => void;
    search: () => void
}) {
    
    
    
    return(
        <div className={styles.bar}>
            <input
            id="search"
            name="search"
            placeholder="Pesquise um livro"
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
        
            />
           <div>
                <button onClick={search}> 
                    <CiSearch />
                </button>
           </div>
        </div>
    )

   
}
export default SearchBar