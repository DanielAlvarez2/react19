import './App.css'

function App() {
  return <Page />
}

function Header() {
  return(
    <header>
      <img src="react-logo.png" width="40px" alt="React logo" />    
    </header>
  )
}

function MainContent(){
  return(
    <main>
    <h1>Fun facts about React!</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
  )
}

function Footer(){
  return(
    <footer>
      <small><small>
        &copy;2024 ToggleSoftware.com<br />
        All Rights Reserved.
      </small></small>        
    </footer>
  )
}

function Page(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}
export default App
