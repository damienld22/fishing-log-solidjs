import { A } from '@solidjs/router';
import { FaSolidHouse } from 'solid-icons/fa';

const Header = () => {
  return (
    <header class="bg-gray-300 flex flex-col justify-center items-center h-[10vh] sticky top-0 left-0 w-full z-50">
      <div class="flex items-center justify-between w-11/12">
        <A href="/">
          <FaSolidHouse size={24} />
        </A>
        <h1 class="text-3xl self-center">Fishing log</h1>
        <div />
      </div>
    </header>
  );
};

export default Header;
