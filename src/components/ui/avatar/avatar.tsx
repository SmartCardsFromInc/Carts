import avatar from ".//img/avatar.jpg";
import s from "./avatar.module.scss";

export const Avatar = () => {
  return (
    <div>
      <img className={s.avatar} src={avatar} alt={"avatar"} />
    </div>
  );
};
