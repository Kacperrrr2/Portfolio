import "./tobar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
export default function Tobar({menuOpen,setMenuOpen}) {
  return (
    <div className={"tobar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
         <a href="#intro" className="logo">Kacperrrr2</a>
          <div className="itemContainer">
          <PersonIcon className="icon"/>
          <span>+44 888 999 22</span>
          </div>
          <div className="itemContainer">
          <MailIcon className="icon"/>
          <span>k4cper.petelicki@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
