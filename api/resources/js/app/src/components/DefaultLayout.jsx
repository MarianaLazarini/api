import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLogin } from '../Context/ContextProvider';
import axiosClient from '../axiosClient';

export default function DefaultLayout({ children }) {
  const { token, _setUser, _setToken, user } = useLogin();

  // hook de navegação
  const navigate = useNavigate();

  // redireciona se não houver token
  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (e) => {
    e.preventDefault();

    axiosClient
      .post('/logout', { email: user.email })   // envie JSON ou nada
      .then(() => {
        _setUser(null);         // ou {}
        _setToken(null);
        navigate('/login');     // usa o hook
      })
      .catch(console.error);
  };

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user/index">Usuário</Link>
        <Link to="/editora/index">Editora</Link>
        <Link to="/autor/index">Autor</Link>
        <Link to="/livro/index">Livro</Link>
      </aside>

      <div className="content">
        <header>
          <div className="header">Sistema de controle de livros</div>

          <div>
            {user?.name} &nbsp;&nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">
              Logout
            </a>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
