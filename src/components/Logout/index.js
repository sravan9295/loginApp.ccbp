// Write your code here

import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button className="logout-btn" onClick={logout} type="button">
      Logout
    </button>
  )
}
export default Logout
