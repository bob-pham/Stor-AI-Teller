function Homepage() {

  return (
    <main className="grid place-items-center w-screen h-screen text-white
    bg-gradient-to-tr from-red-400 to-yellow-400 via-blue-400 animate-gradient-xy">
      <div className="grid place-items-center">
        <h1 className="text-8xl font-mousememoirs text-center">StorAI Teller</h1>
        <p className="text-center font-mono">An AI Powered Kids Storybook Generator</p>
        <div className="grid place-items-center my-8">
        <a className="btn border-white border-2 text-white font-mousememoirs text-4xl
        bg-gradient-to-tr from-yellow-400 to-blue-400 via-red-400 animate-gradient-xy"
        href="my-storybook">
          Get Started
        </a>
      </div>
      <h3 className="text-white font-mousememoirs text-lg">By Bob Pham</h3>
      </div>
    </main>
  )
}

export default Homepage
