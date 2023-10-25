import * as Dialog from "@radix-ui/react-dialog";

import s from "./modalForQuestion.module.scss";

import { Button } from "@/components/ui/button";

type Props = {
  showModal: boolean;
};
export const ModalForQuestion: React.FC<Props> = ({ showModal }) => (
  <Dialog.Root open={true}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className={s.title}>
          <p>Learn Lorem ipsum dolor.</p>
        </Dialog.Title>
        <Dialog.Description>
          <div className={s.topicBlock}>
            <div className={s.topic}>
              <p>Question:</p>
            </div>
            <div className={s.topicContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, ut!
              </p>
            </div>
            <div className={s.description}>
              <p>Number of attempts to answer the question:10</p>
            </div>
          </div>
        </Dialog.Description>
        <Button variant={"primary"} fullWidth={true}>
          Show Answer
        </Button>
        <Button variant={"secondary"} fullWidth={true}>
          End study session
        </Button>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
