import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import UserSummary from './components/UserSummary.jsx'
import { fetchUser } from './services/rando_user'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const refreshUser = async () => {
    const newUser = await fetchUser()
    setCurrentUser(newUser)
  }
  useEffect(() => {
    refreshUser()
  }, [])

  return (
    <>
      <Header />
      <UserSummary userData={currentUser} />
    </>
  )
}

export default App
