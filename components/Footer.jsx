import {FolderIcon} from "@heroicons/react/solid";
function Footer() {
  return (
    <div className="flex justify-between align-center border-y-2 border-gray-800 px-5 py-3">
      <a
        href="https://www.linkedin.com/in/ilyass-el-arbaouti-75b335201/"
        target="_blank"
        className="hover:text-white"
        rel="noreferrer"
      >
        Ilyass El Arbaouti
      </a>
      <a href="" target="_blank" className="hover:text-white" rel="noreferrer">
        <FolderIcon className="h-7" />
      </a>
    </div>
  );
}

export default Footer;
