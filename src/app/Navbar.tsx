const Navbar = () => {
  return (
    <>
      <header className="text-zinc-200">
        <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="flex items-center p-2 gap-2">
            <img src="./logo.png" width="50" alt="site logo" />
            <div className="font-bold text-2xl ">
              {" "}
              Bishnu <span className="text-sky-900">Thapa</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="menu-item">
              <span>Home</span>
            </div>
            <div className="menu-item">
              <span>Lineup</span>
            </div>
            <div className="menu-item group">
              <span>Tickets</span>
              <div className="hidden group-hover:block bg-pink-500 absolute top-full right-0 whitespace-nowrap rounded-b-md text-right">
                <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
                  <span>Single Day Ticket</span>
                </div>
                <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
                  <span>7 Day Ticket</span>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <span>Support</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
