import "../styles/dashboard.css";
import Admin from "../assets/profile.png";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  function CloseMenu() {
    document.getElementById("left-nav-mob").style.display = "none";
    document.getElementById("open-menu").style.display = "block";
    document.getElementById("close-menu").style.display = "none";
  }
  function OpenMenu() {
    document.getElementById("left-nav-mob").style.display = "initial";
    document.getElementById("close-menu").style.display = "block";
    document.getElementById("open-menu").style.display = "none";
  }

  return (
    <div className="dashboard">
      <header>
        <section>
          <img id="open-menu" onClick={OpenMenu} src={Menu} />
          <img id="close-menu" onClick={CloseMenu} src={Close} />
          <h1>Welcome Admin</h1>
        </section>
        <section>
          <img src={Admin} />
          <p>John Doe</p>
        </section>
      </header>

      <div className="admin-box">
        <aside className="left-nav">
          <div className="left-nav-top">
            <img src={Admin} />
            <section>
              <h1>John Doe</h1>
              <p>Admnistrator</p>
            </section>
          </div>
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard </NavLink>
            </li>
            <li>
              <NavLink to="create">Create Article </NavLink>
            </li>
            <li>
              <NavLink to="admincreate"> View Admin Details </NavLink>
            </li>
          </ul>
        </aside>

        <aside id="left-nav-mob">
          <div className="left-nav-top">
            <img src={Admin} />
            <section>
              <h1>John Doe</h1>
              <p>Admnistrator</p>
            </section>
          </div>
          <ul>
            <li onClick={CloseMenu}>
              <NavLink to="">Dashboard </NavLink>
            </li>
            <li onClick={CloseMenu}>
              <NavLink to="create">Create Article </NavLink>
            </li>
            <li onClick={CloseMenu}>
              <NavLink to="admincreate"> View Admin Details </NavLink>
            </li>
          </ul>
        </aside>
        <Outlet />

      </div>
    </div>
  );
}

export default Dashboard;
