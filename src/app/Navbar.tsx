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
            <div className="menu-item">
              <span>Tickets</span>
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
