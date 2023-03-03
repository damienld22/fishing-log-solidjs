import { A } from '@solidjs/router';
import { JSXElement } from 'solid-js';

interface HomeButtonProps {
  icon: JSXElement;
  href: string;
  label: string;
}

const HomeButton = (props: HomeButtonProps) => {
  return (
    <A href={props.href} class="card bg-base-100 shadow-xl w-[30vw] h-[30vw] flex flex-col items-center justify-center">
      {props.icon}
      <p class="text-xs mt-2">{props.label}</p>
    </A>
  );
};

export default HomeButton;
