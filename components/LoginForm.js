import Router from "next/router";
import { loginUser } from "../lib/auth";

class LoginForm extends React.Component {
  state = {
    email: "Rey.Padberg@karina.biz",
    password: "ambrose.net",
    error: "",
    isLoading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ error: "", isLoading: true });
    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch(this.showError);
  };

  showError = err => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: false });
  };

  render() {
    const { email, password, error, isLoading } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Sending..." : "Submit"}
        </button>
        {error && <div>{error}</div>}
      </form>
    );
  }
}

export default LoginForm;
