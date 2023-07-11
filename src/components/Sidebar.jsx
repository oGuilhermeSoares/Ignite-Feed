import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={style.profile}>
        <Avatar src={"https://github.com/oGuilhermeSoares.png"} />

        <strong>Guilherme Soares</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
