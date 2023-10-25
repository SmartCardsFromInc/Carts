import s from "./headerForModal.module.scss";

import { Close } from "@/components/ui/close/close";

type Props = {
  title: string;
};
export const HeaderForModal: React.FC<Props> = ({ title }) => {
  return (
    <div className={s.header}>
      <div className={s.title}>
        <p> {title}</p>
      </div>
      <div className={s.close}>
        <button className={s.closeButton}>
          <Close color={"white"} />
        </button>
      </div>
    </div>
  );
};
