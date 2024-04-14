import { navLinks } from "../constants"

const Nav = () => {
  return (
    <div className="flex justify-between max-container relative z-20 py-6">
        <a href="/">
            <p className="text-white text-3xl font-bold">Taran</p>
        </a>
        <ul className="flex items-center text-lg gap-8">
            {navLinks.map((item)=>(
                <li className="text-xl font-semibold" key={item.label}>
                    <a 
                    href={item.href}
                    className="text-white hover:text-amber-400"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Nav