import * as Dialog from "@radix-ui/react-dialog";

import s from "./modalHeader.module.scss";

import { Close } from "@/components/ui/close/close";

type Props = {
  title: string;
  showClose?: boolean;
};
export const ModalHeader: React.FC<Props> = ({ title, showClose }) => {
  return (
    <Dialog.Root open={true}>
      <div className={`${showClose ? s.headerDefault : s.headerWithoutClose}`}>
        <Dialog.Title>
          <div>
            <p>{title}</p>
          </div>
        </Dialog.Title>
        <Dialog.Close asChild>
          {showClose && (
            <button
              className={s.closeButton}
              onClick={() => {
                //   setShowModal(false);
              }}
            >
              <Close color={"white"} />
            </button>
          )}
        </Dialog.Close>
      </div>
    </Dialog.Root>
  );
};
