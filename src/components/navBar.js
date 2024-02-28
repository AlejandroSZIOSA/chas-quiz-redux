import Link from "next/link";

const textStyle = "hover:text-amber-400"; //Tailwind style

const Navbar = () => {
  return (
    <div class="flex flex-row w-full bg-[#cdcdcd] items-center justify-around">
      <nav class="p-4 text-black">
        <ul class="flex gap-14 text-xl list-none m-0 p-0">
          <li class={textStyle}>
            <Link href="/">Start Quiz</Link>
          </li>
          <li class={textStyle}>
            <Link href="/adminPage">Admin</Link>
          </li>
          <li class={textStyle}>
            <Link href="/contextTestPage">Context Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
