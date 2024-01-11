import { MenuItemsProps } from "../MenuButton";

type MenuProps = {
  items?: MenuItemsProps;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ items, className }) => {
  return (
    <div
      className={`py-[11px] flex flex-col border-[1px] border-midGrey bg-white ${className} h-full cursor-default`}
    >
      {items?.map(({ icon, label, onClick }, i) => (
        <div
          onClick={onClick}
          key={i}
          className="flex flex-shrink-0 gap-[10px] items-center px-4 py-1 cursor-pointer hover:bg-midBlue hover:text-white duration-300 text-darkGrey"
        >
          <i>{icon}</i>
          <span className="text-[15px]">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
