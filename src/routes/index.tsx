import HomeButton from '~/components/Home/HomeButton';
import { FaSolidCartShopping, FaSolidLocationDot, FaSolidBoxArchive } from 'solid-icons/fa';

export default function Home() {
  return (
    <main class="mt-10 mx-6 grid grid-cols-2 gap-6 justify-items-center">
      <HomeButton icon={<FaSolidCartShopping />} label="Shopping list" href="/shopping" />
      <HomeButton icon={<FaSolidLocationDot />} label="Fishing places" href="/places" />
      <HomeButton icon={<FaSolidBoxArchive />} label="Preparation" href="/preparation" />
    </main>
  );
}
