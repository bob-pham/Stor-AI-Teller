import { useState } from 'react'

import robot from './assets/robot.png';
import garbage from './assets/icons8-waste-24.png'

function StoryGenerator({ nextPage }: any) {

    const [currTheme, setCurrTheme] = useState("")
    const [theme, setTheme] = useState("")
    const [character, setCharacter] = useState("")
    const [characters, setCharacters] = useState([])
    const [charCount, setCharCount] = useState(0)

    const themeHandler = () => {
        setTheme(currTheme)
        setCurrTheme("")
        // @ts-ignore
        document.getElementById("theme-form").reset()
    }

    const characterHandler = () => {
        setCharacters(nw => {
            let temp = { ...nw };
            // @ts-ignore
            temp[charCount] = character
            setCharCount(charCount + 1)
            console.log(charCount)
            return temp
        })

        setCharacter("")
        // @ts-ignore
        document.getElementById("character-form").reset()
    }

    const generateHandler = () => {
        let char_list = Object.values(characters);

        if (char_list.length > 0 && theme) {
            nextPage(theme, char_list)
        } else if (!theme) {
            alert("No Theme Added!")
        } else if (char_list.length === 0) {
            alert("No Characters Added!");
        }
    }

    const CharacterSlice = ({ index, name }: any) => {

        const removeSelf = () => {
            setCharacters(ps => {
                let temp = { ...ps };
                delete temp[index];
                return temp;
            })
        }

        return (
            <div className="grid grid-cols-2 w-1/2 place-items-center">
                <h3>{name}</h3>
                <button onClick={removeSelf}><img src={garbage} /></button>
            </div>
        )
    }

    const NoBlank = ({ type }: any) => {
        return (
            <div className="grid place-items-center">
                <h3 className="text-xl text-white font-mousememoirs">No {type} Set!</h3>
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-white fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="grid grid-cols-2">
                <div className="grid place-items-center text-white font-mousememoirs w-full">
                    <h1 className="text-white font-mousememoirs text-8xl my-4">Create Your Story!</h1>
                    <div className="grid place-items-center">
                        <h1 className="text-4xl my-4">What is the theme of your story?</h1>
                        <form id="theme-form" className="w-full grid place-items-center">
                            <input onChange={(event) => setCurrTheme(event.target.value)} type="theme" placeholder="Type here"
                                className="input w-full max-w-xs bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy text-white placeholder:text-white" />
                        </form>
                        <button className="btn 
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            my-4 text-white text-2xl"
                            onClick={themeHandler}>Set Theme</button>
                    </div>
                    <div className="grid place-items-center w-full">
                        <h1 className="text-4xl my-4">Add Characters!</h1>
                        <form id="character-form" className="w-full grid place-items-center">
                            <input onChange={(event) => setCharacter(event.target.value)} type="text" placeholder="Type here"
                                className="input w-full max-w-xs bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy text-white placeholder:text-white" />
                        </form>
                        <button className="btn 
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            my-4 text-white text-2xl"
                            onClick={characterHandler}>Add Character</button>
                    </div>
                </div>
                <div className="grid place-items-center text-white font-mousememoirs">
                    <h1 className="text-4xl">Current Theme is:</h1>
                    {theme ? (<h3 className="text-xl">{theme}</h3>) : <NoBlank type="theme" />}
                    <h1 className="text-4xl">Characters:</h1>
                    {Object.values(characters).length > 0 ? Object.entries(characters).map(([key, value]) => (<CharacterSlice key={key} index={key} name={value} />))
                        : <NoBlank type="characters" />}
                    <button className="btn text-4xl text-white
                    bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy"
                        onClick={generateHandler}>Generate Story!</button>
                </div>
            </div>
        </>
    )
}

function LoadingDisplay() {
    return (
        <div className="grid place-items-center">
            <h1 className="text-white font-mousememoirs text-8xl my-2">Creating your Story!</h1>
            <img className="w-1/2 my-4" src={robot} />
            <div role="status">
                <svg aria-hidden="true" className="w-36 h-36 mr-2 text-gray-200 animate-spin dark:text-white fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

function StoryDisplay({ pageSetter, storyLen, storyDict }: any) {
    const [page, setPage] = useState(0)

    const backHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const nextHandler = () => {
        if (page < storyLen - 1) {
            setPage(page + 1)
        }
    }

    return (
        <div className="grid grid-rows-2 place-items-center max-height-screen">
            <div className="grid place-items-center">
                <img className="max-h-96" src={storyDict[page]['picture']} />
            </div>
            <div className="grid place-items-center my-4">
                <p className="bg-white rounded-lg p-5 text-black font-mousememoirs text-2xl text-center">{storyDict[page]['text']}</p>
                <div>
                    <button className="btn mx-2
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            my-4 text-white text-2xl"
                        onClick={backHandler}>Back</button>
                    {page === storyLen - 1 ?
                        <button className="btn
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            text-white text-2xl"
            onClick={pageSetter} >Generate Another!</button>
                        : <button className="btn mx-2
            bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy 
            my-4 text-white text-2xl"
                            onClick={nextHandler}>Next</button>}
                </div>
                <p className="text-white text-lg font-mousememoirs text-center">Page {page + 1} of {storyLen}</p>
            </div>
        </div>
    )
}


function Storybook() {
    const [page, setPage] = useState(0)
    const [storyLen, setStoryLen] = useState(0)
    const [storyDict, setStoryDict] = useState(null)

    const generateStory = async (theme: string, characters: string[]) => {
        setPage(1)

        let formData = new FormData()
        formData.append('theme', JSON.stringify(theme))
        formData.append('characters', JSON.stringify(characters))

        const resp = await fetch('http://localhost:5000/generate-story', {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
        const data = await resp.json()
        setStoryLen(data['length'])
        setStoryDict(data['book'])
        setPage(2)

    }

    return (
        <main className="grid place-items-center w-screen h-screen max-h-screen overflow-hidden
        bg-gradient-to-tr from-red-400 to-yellow-400 via-blue-400 animate-gradient-xy">
            {page === 0 ? <StoryGenerator nextPage={generateStory} />
                : page === 1 ? <LoadingDisplay /> : <StoryDisplay pageSetter={() => setPage(0)}storyLen={storyLen} storyDict={storyDict} />}
        </main>
    )
}

export default Storybook