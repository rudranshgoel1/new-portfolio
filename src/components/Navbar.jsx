import { navLinks, navIcons } from "#constants"
import dayjs from "dayjs"

const Navbar = () => {
  return <nav className="glass-card">
    <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold" style={{ color: "white" }}>Rudransh's Portfolio</p>

        <ul>
            {navLinks.map(({ id, name }) => (
                <li key={id}>
                    <p style={{ color: "white" }}>{name}</p>
                </li>
            ))}
        </ul>
    </div>

    <div>
        <ul>
            {navIcons.map(({ id, img }) =>(
                <li key={id}>
                    <img src={img} className="icon-hover" alt={`icon-${id}`} style={{ filter: "invert(100%)" }} />
                </li>
            ))}
        </ul>

        <time style={{ color: "white" }}>{dayjs().format("ddd MMM D h:mm A")}</time>
    </div>
  </nav>
}

export default Navbar