import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import beak from "./beak container - top.svg";
import s from "./dropMenu.module.scss";

import { Avatar } from "@/components/ui/avatar";

type Props = {
  value: string;
  src: string;
  alt: string;
};
type PersoneData = {
  name?: string;
  email?: string;
};
type PropsArray = Props[] & PersoneData;
export const DropdownMenuDemo: React.FC<{
  items: PropsArray;
  personData?: PersoneData;
}> = ({ items, personData }) => {
  return (
    <div className={s.dropMenuWithTrigger}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={s.trigger} asChild>
          <div>
            <Avatar />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.items} sideOffset={5}>
            <div className={s.beak}>
              <img src={beak} alt={"beak"} />
            </div>
            {personData && (
              <DropdownMenu.Item disabled className={s.personDataBlock}>
                <Avatar />
                <div className={s.dataBlock}>
                  <div className={s.name}>{personData.name}</div>
                  <div className={s.email}>{personData.email}</div>
                </div>
              </DropdownMenu.Item>
            )}

            {items.map((el: Props, index) => {
              return (
                <DropdownMenu.Item key={index} className={s.item}>
                  <img src={el.src} alt={el.alt} />
                  <div>{el.value} </div>
                </DropdownMenu.Item>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
