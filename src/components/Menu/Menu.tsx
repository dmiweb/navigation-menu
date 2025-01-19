import MenuItem from "./MenuItem";

export default function Menu(): JSX.Element {
  const menuItems = [
    { label: "Главная", link: "/" },
    { label: "Дрифт-такси", link: "/drift" },
    { label: "Time Attack", link: "/timeattack" },
    { label: "Forza Karting", link: "/forza" },
  ];

  return (
    <nav className="menu">
      {menuItems.map(({ label, link }) => (
        <MenuItem key={label} label={label} link={link} />
      ))}
    </nav>
  );
}