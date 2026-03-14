import { navLinks, navIcons } from "#constants";
import dayjs from "dayjs";
import LiveClock from "./LiveClock";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav className="glass-card">
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold" style={{ color: "white" }}>
          Rudransh's Portfolio
        </p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p style={{ color: "white" }}>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                className="icon-hover"
                alt={`icon-${id}`}
                style={{ filter: "invert(100%)" }}
              />
            </li>
          ))}
        </ul>

        <LiveClock />
      </div>
    </nav>
  );
};

export default Navbar;
