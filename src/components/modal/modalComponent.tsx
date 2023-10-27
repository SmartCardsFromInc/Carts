import * as React from "react";
import { ReactNode, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import s from "./modalComponent.module.scss";

import { ModalHeader } from "@/components/modalHeader";
import { Button } from "@/components/ui/button/button";

type Props = {
  titleForHeader: string;
  showClose?: boolean;
  children: ReactNode;
};
export const ModalComponent: React.FC<Props> = ({
  titleForHeader,
  showClose,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button
        variant={"primary"}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Learn to Pack
      </Button>
      {showModal && (
        <Dialog.Root open={true}>
          <Dialog.Portal>
            <div className={s.contentWrapper}>
              <Dialog.Overlay />
              <Dialog.Content className={s.modal}>
                <ModalHeader title={titleForHeader} showClose={showClose} />
                {children}
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};
