import Link from "next/link";

const textStyle = "hover:text-amber-400"; //Tailwind style

const Navbar = () => {
  return (
    <div className="flex flex-row w-full bg-[#070F2B] items-center justify-around">
      <nav className="p-4 text-[#abaab8]">
        <ul className="flex gap-14 text-xl list-none m-0 p-0">
          <li className={textStyle}>
            <Link href="/">Start Quiz</Link>
          </li>
          <li className={textStyle}>
            <Link href="/adminPage">Admin</Link>
          </li>
          <li className={textStyle}>
            <Link href="/contextTestPage">Context Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
