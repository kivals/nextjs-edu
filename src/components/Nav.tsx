import NavLink from "@/components/NavLink";

const menu = [
  { url: "/", title: "Главная" },
  { url: "/rackets", title: "Ракетки" },
  { url: "/top", title: "Топ 10 ракеток" },
];

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-between gap-x-4">
        {menu.map(({ url, title }) => (
          <li key={url}>
            <NavLink url={url} title={title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
