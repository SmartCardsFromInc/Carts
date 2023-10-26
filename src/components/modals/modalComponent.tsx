import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import s from "./modalComponent.module.scss";

import { Button } from "@/components/ui/button/button";
import { Close } from "@/components/ui/close/close";

export const ModalComponent = () => {
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
            <div className={s.modal}>
              <div className={s.contentWrapper}>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content
                  className="DialogCont
              ent"
                >
                  <div className={s.modalHeader}>
                    <Dialog.Title className={s.primaryDescription}>
                      <div className={s.headerTitle}>
                        <p>Add New Pack</p>
                      </div>
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        className={s.closeButton}
                        onClick={() => {
                          setShowModal(false);
                        }}
                      >
                        <Close color={"white"} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <Dialog.Description></Dialog.Description>
                  <div className={s.bottomButtonsGroup}>
                    <Button variant={"primary"}>Add New Pack</Button>
                    <Button variant={"secondary"}>Cancel</Button>
                  </div>
                </Dialog.Content>
              </div>
            </div>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};
