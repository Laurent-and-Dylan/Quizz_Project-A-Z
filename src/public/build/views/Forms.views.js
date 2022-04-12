"use-strict";

import { Container } from "../components/container.js";
import { form } from "../components/Form.js";
import { Header } from "../components/header.js";
import {
  FormsControllers,
  LoginControllers,
  RegisterControllers,
} from "../controllers/Forms.controller.js";

//^ Login View Function
function LoginForm() {
  //~ Reset section 
  let section = document.querySelector("section");
  section.className = "";

  //~ Create header
  Header.form("Register");

  //~ Create main content
  let container = Container.Base();
  container.className =
    "text-center font-dosis min-h-[65vh] flex flex-col items-center justify-center ";
  container.innerHTML = `
    <h1 class="uppercase font-extrabold text-jaune text-3xl">Login Form :</h1>
    ${form("LogIn", "Email / Username", "Password")}
  `;

  //! fail (its header controller) 
  FormsControllers();
  
  //~ Call logics of form
  submit.addEventListener("click", () => LoginControllers(username, password));
}

//^ Register View Function 
function RegisterForm() {
  //~ Reset section 
  let section = document.querySelector("section");
  section.className = "";

  //~ Create header
  Header.form("LogIn");

  //~ Create main content
  let container = Container.Base();
  container.className =
    "text-center font-dosis min-h-[65vh] flex flex-col items-center justify-center ";
  container.innerHTML = `
    <h1 class="uppercase font-extrabold text-jaune text-3xl">Login Form :</h1>
    ${form("LogIn", "Email / Username", "Password")}
  `;
  form("Register", "Username", "Password", "Email");

  //! fail (its header controller) 
  FormsControllers();

  //~ Call logics of form
  submit.addEventListener("click", () =>
    RegisterControllers(mail, username, password)
  );
}

export { LoginForm, RegisterForm };
