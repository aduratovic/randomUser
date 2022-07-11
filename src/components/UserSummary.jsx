import { useState } from 'react'

const UserSummary = ({ userData }) => {
  const [showMore, setShowMore] = useState(false)

  if (userData) {
    return (
      <>
        <h1>{userData.name.first}</h1>
        <h3> {userData.email}</h3>
        {showMore && (
          <>
            <p>
              Adress: {userData.location.country}, {userData.location.city},{' '}
              {userData.location.street.name}
            </p>
            <p>Username : {userData.login.username}</p>
            <p>Nationalality: {userData.nat}</p>
            <p>Cell Phone: {userData.phone}</p>
            <img src={userData.picture.medium} alt='' />
          </>
        )}
        <button
          onClick={(e) => {
            e.preventDefault()
            setShowMore(!showMore)
          }}
        >
          Show More
        </button>
      </>
    )
  } else {
    return <h1>No user Data</h1>
  }
}

export default UserSummary