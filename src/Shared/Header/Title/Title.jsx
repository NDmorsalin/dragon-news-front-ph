import moment from 'moment/moment'
import logo from '../../../assets/logo.png'

const Title = () => {
  return (
    <>
     <img src={logo} alt="Logo" className="" />
      <p className="text-secondary">
        <small>Journalism Without Fear or Favour</small>
      </p>
      <p className="">{moment().format("dddd, MMMM DD,  YYYY")}</p>
    </>
  )
}

export default Title