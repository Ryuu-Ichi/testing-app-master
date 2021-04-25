import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Главная
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="navbar-brand" to="/posts/">
              Посты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
