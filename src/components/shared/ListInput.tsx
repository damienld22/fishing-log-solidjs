import { FaSolidCheck } from 'solid-icons/fa';
import { createSignal } from 'solid-js';

interface ListInputProps {
  placeholder?: string;
  onValidate: (value: string) => void;
}

export default function ListInput(props: ListInputProps) {
  const [value, setValue] = createSignal('');

  const onValidateValue = () => {
    props.onValidate(value());
    setValue('');
  };

  return (
    <div class="inline-flex justify-between items-center w-full">
      <input
        value={value()}
        onInput={(evt) => setValue(evt.currentTarget.value)}
        type="text"
        placeholder={props.placeholder}
        class="input input-ghost focus:outline-none input-md"
        onKeyPress={(evt) => {
          if (evt.key === 'Enter') {
            evt.preventDefault();
            onValidateValue();
          }
        }}
      />

      <FaSolidCheck onClick={onValidateValue} />
    </div>
  );
}
