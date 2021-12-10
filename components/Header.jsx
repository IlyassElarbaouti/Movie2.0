import Image from "next/image"
import HeaderItem from "./HeaderItem";
import { HomeIcon , BadgeCheckIcon , CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon } from "@heroicons/react/outline";

function Header() {
    return (
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        {/* <Image
          className="object-contain"
          alt=""
          width={200}
          height={100}
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        /> */}
        <h1 className=' font-bold leading-10'>MOVIE 2.0</h1>
      </header>
    );
}

export default Header
