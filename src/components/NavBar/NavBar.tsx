import Image from "next/image"
import MenuItem from "../MenuItem/MenuItem"

export interface NavBarLink {
  name: string
  href: string
  prefix: string
}

const NavBar = () => {
  const navBarLinks: NavBarLink[] = [
    {
      name: "About",
      href: "#",
      prefix: "01",
    },
    {
      name: "Experience",
      href: "#",
      prefix: "02",
    },
    {
      name: "Work",
      href: "#",
      prefix: "03",
    },
    {
      name: "Contact",
      href: "#",
      prefix: "04",
    },

    {
      name: "Resume",
      href: "#",
      prefix: "05",
    },
  ]

  return (
    <nav>
      <div className="w-full h-[80px] flex justify-between items-center p-4">
        {/* logo */}
        <div className="w-[50px] h-[50px]">
          <Image
            src={"/opelogo.svg"}
            width={50}
            height={50}
            alt="Opel Emanuel's logo"
          />
        </div>

        {/* md screen menu */}
        <div className="hidden w-fit md:flex justify-between items-center">
          {navBarLinks &&
            navBarLinks.map((item, index: number) => {
              return <MenuItem key={index} item={item} />
            })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
