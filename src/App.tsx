import s from "./app.module.scss";

import { ModalComponent } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TextField } from "@/components/ui/text-field/text-field";

export function App() {
  return (
    <div className={s.app}>
      <ModalComponent showClose={true} titleForHeader={"Add New Pack"}>
        <TextField />
        <Checkbox label={"Private pack"} />
        <div className={s.modalButtonGroup}>
          <Button variant={"secondary"}>Cancel</Button>
          <Button variant={"primary"}>Add New Pack</Button>
        </div>
      </ModalComponent>
    </div>
  );
}
