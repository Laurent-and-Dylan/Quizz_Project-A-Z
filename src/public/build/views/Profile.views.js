"use-strict";

import { Container } from "../components/container.js";
import { ProfileController } from "../controllers/Profile.controller.js";
import { Input } from "../components/Input.js";
import { inputFile } from "../components/inputFile.js";
import { Button } from "../components/Button.js";
import { QuizzData } from "../data/Quizz.datas.js";

export async function Profile() {
  let user = {
    id_user: localStorage.getItem("user"),
    token: localStorage.getItem("jwt"),
  };
  let { results } = await new QuizzData("user/getUser", "POST", user).fetch;
  let container = Container.Base();
  container.className =
    "py-[4vh] min-h-[65vh] grid grid-cols-4 grid-rows-3 w-1/2 mx-auto";
  container.innerHTML = `<h1 class="col-start-1 col-end-5 text-2xl lg:text-4xl text-center text-jaune uppercase font-extrabold">Account Informations</h1>`;

  let subContainer = Container.SubContainer();
  subContainer.className = "col-start-1 col-end-4";
  subContainer.innerHTML = `
    ${
      new Input("text", results.username, "pseudo", "w-full shadow-2xl").display
    }
    ${
      new Input("email", results.email, "email", "w-full my-3 shadow-2xl")
        .display
    }
    ${inputFile()}
   `;
  container.innerHTML += `<img id="img" src="./uploads/${results.image}" class="place-self-center content-center h-[116px] w-[116px]">`;
  container.innerHTML += `
  ${
    new Button(
      "New quizz",
      "create",
      "col-start-1 col-end-3 place-self-center shadow-2xl"
    ).display
  } 
  ${
    new Button(
      "See your quizz",
      "quizz",
      "col-start-3 col-end-5 place-self-center opacity-80 shadow-2xl",
      "bg-orange"
    ).display
  }
  `;

  ProfileController();
}
