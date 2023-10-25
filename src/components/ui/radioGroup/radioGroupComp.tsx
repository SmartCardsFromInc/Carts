import * as RadioGroup from "@radix-ui/react-radio-group";

import s from "./radioGroup.module.scss";

type Props = {
  value: string;
  label: string;
};
type PropsArray = Props[];
export const RadioGroupComponent: React.FC<{ items: PropsArray }> = ({
  items,
}) => {
  // console.log(items);

  return (
    <form>
      <RadioGroup.Root
        className={s.radioGroupRoot}
        defaultValue={"default"}
        aria-label="View density"
      >
        {items.map((el, index) => {
          return (
            <div key={index} className={s.itemWrapper}>
              <RadioGroup.Item
                className={s.radioGroupItem}
                value={el.value}
                id={"r" + index.toString()}
              >
                <RadioGroup.Indicator className={s.radioGroupIndicator} />
              </RadioGroup.Item>
              <label className={s.label} htmlFor={"r" + index.toString()}>
                <div>{el.label}</div>
              </label>
            </div>
          );
        })}
      </RadioGroup.Root>
    </form>
  );
};
