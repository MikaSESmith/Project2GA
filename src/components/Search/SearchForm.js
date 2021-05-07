import React, {useState} from "react"

const SearchForm = ({searchText}) => {
const [text, setText] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    // https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL

    searchText(text)
}

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. fashion" className="py-1 px-2 rounded-l-lg"  onChange={(e) => setText(e.target.value)}/>

                <button type="submit" className="bg-blue-400 py-1 px-2 rounded-r-lg text-white ">Search</button>
            </form>
        </div>
    )
}

export default SearchForm
