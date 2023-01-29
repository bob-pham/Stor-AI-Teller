import { useState } from 'react'

function StoryGenerator({ nextPage }: any) {

    const [currTheme, setCurrTheme] = useState("")
    const [theme, setTheme] = useState("")
    const [character, setCharacter] = useState("")
    const [characters, setCharacters] = useState([])


    return (
        <>
            <div className="grid grid-cols-2">
                <div className="grid place-items-center text-white font-mousememoirs w-full">
                    <h1 className="text-white font-mousememoirs text-8xl my-4">Create Your Story!</h1>
                    <div className="grid place-items-center">
                        <h1 className="text-4xl my-4">What is the theme of your story?</h1>
                        <input onChange={(event) => setTheme(event.target.value)} type="text" placeholder="Type here"
                            className="input w-full max-w-xs bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy text-white" />
                        <button className="btn 
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            my-4 text-white text-2xl">Set Theme</button>
                    </div>
                    <div className="grid place-items-center w-1/2">
                        <h1 className="text-4xl my-4">Add Characters!</h1>
                        <input onChange={(event) => setCharacter(event.target.value)} type="text" placeholder="Type here"
                            className="input w-full max-w-xs bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy text-white" />
                        <button className="btn 
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            my-4 text-white text-2xl"
            onClick={() => {
                characters.push(character)
                setCharacters(characters)
            }}>Add Character</button>
                    </div>
                </div>
                <div className="grid place-items-center text-white font-mousememoirs">
                    <h1 className="text-4xl">Current Theme is:</h1>
                    <h3>{currTheme}</h3>
                    <h1 className="text-4xl">Characters:</h1>
                    {characters.map((c) => <h3>{c}</h3>)}
                    <button className="btn text-4xl text-white
                    bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy ">Generate Story!</button>
                </div>
            </div>
        </>
    )
}

function LoadingDisplay({ nextPage }: any) {
    return <div></div>
}

function StoryDisplay() {
    return <div></div>
}


function Storybook() {
    const [page, setPage] = useState(0)

    return (
        <main className="grid place-items-center w-screen h-screen
        bg-gradient-to-tr from-red-400 to-yellow-400 via-blue-400 animate-gradient-xy">
            {page === 0 ? <StoryGenerator nextPage={() => setPage(1)} />
                : page === 1 ? <LoadingDisplay nextPage={() => setPage(2)} /> : <StoryDisplay />}
        </main>
    )
}

export default Storybook