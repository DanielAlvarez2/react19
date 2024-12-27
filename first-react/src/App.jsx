import './App.css'

function App() {
  return <Page />
}

function Page(){
  return(
    <>
      <img src="react-logo.png" width="40px" alt="React logo" />    
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  )
}
export default App
