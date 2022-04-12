"use-strict";

import { Container } from "../components/container.js";
import { Header } from "../components/header.js";
import {
  FormsControllers,
  LoginControllers,
  RegisterControllers,
} from "../controllers/Forms.controller.js";

function LoginForm() {
  Header.form("Login Form :", "Register");
  Container.form("LogIn", "Email / Username", "Password");
  FormsControllers();

  submit.addEventListener("click", () => LoginControllers(username, password));
}

function RegisterForm() {
  Header.form("Register Form :", "LogIn");
  Container.form("Register", "Username", "Password", "Email");
  FormsControllers();

  submit.addEventListener("click", () =>
    RegisterControllers(mail, username, password)
  );
}

export { LoginForm, RegisterForm };
