import Link from "next/link";
import { logoutUser } from "../lib/auth";

const Layout = ({ children, title, auth }) => {
  const { user = {} } = auth || {};

  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome, <strong>{user.name || "Guest"}</strong>
        </span>

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {user.email ? (
            <>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </nav>
      <h1>{title}</h1>
      {children}

      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .navbar {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        a {
          margin-right: 0.5em;
        }

        button {
          text-decoration: underline;
          padding: 0;
          border-style: none;
          cursor: pointer;
          color: rgb(0, 0, 238);
          margin-right: 0.5em;
          background: none;
          font-size: 1rem;
        }
      `}</style>

      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Quicksand|Ubuntu&display=swap");

        *,
        *::before,
        *::after {
          font-family: "Quicksand", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Layout;
