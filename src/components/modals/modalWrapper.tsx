import { useState } from "react";

import s from "./modalWrapper.module.scss";

import { ModalForQuestion } from "@/components/modals/modalForQuestion";
import { Button } from "@/components/ui/button/button";

export const ModalWrapper = () => {
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
        <div className={s.container}>
          <ModalForQuestion showModal={showModal} />
        </div>
      )}
    </div>
  );
};
