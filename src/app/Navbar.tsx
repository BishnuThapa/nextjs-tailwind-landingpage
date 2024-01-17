import { url } from "inspector";

const Navbar = () => {
  return (
    <>
      <main className="bg-zinc-200 dark:bg-zinc-900">
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
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-[url('./hero.jpg')] bg-cover bg-center bg-fixed">
            <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
              <div className="relative">
                <img src="./logo.png" width="200" alt="site logo" />
              </div>
              <div className="text-5xl font-bold">
                BT:<span className="text-sky-900">Code</span>
              </div>
            </div>
            <div className="font-bold mt-3 text-sm">
              Keep me updated with news and promotions.
            </div>
            <div className="mt-3 flex gap-2">
              <input
                className="rounded-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500"
                type="email"
                name="email"
                placeholder="Email"
                id=""
              />
              <div className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg">
                Subscribe
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-screen-lg mx-auto mt-20 text-zinc-900 dark:text-zinc-200 ">
          <h2>Headliners</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            vel dignissimos, molestias modi harum magnam impedit itaque
            asperiores excepturi quam dolores quae nesciunt! Alias hic modi
            velit, dicta aliquid ad.
          </p>
          <div className="mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div
                className="bg-[url('./hero.jpg')] h-80 w-full snap-center rounded-xl bg-cover bg-center
               shadow-md shadow-black/20"
              ></div>
              <h5 className="mt-5">Pokhara Tour</h5>
              <h6>Saturday - 12 March</h6>
            </div>
            <div className="min-w-[80%] md:min-w-[40%] ">
              <div
                className="bg-[url('./hero.jpg')] h-80 w-full snap-center rounded-xl bg-cover bg-center
               shadow-md shadow-black/20"
              ></div>
              <h5 className="mt-5">Pokhara Tour</h5>
              <h6>Saturday - 12 March</h6>
            </div>
            <div className="min-w-[80%] md:min-w-[40%] ">
              <div
                className="bg-[url('./hero.jpg')] h-80 w-full snap-center rounded-xl bg-cover bg-center
               shadow-md shadow-black/20"
              ></div>
              <h5 className="mt-5">Pokhara Tour</h5>
              <h6>Saturday - 12 March</h6>
            </div>
            <div className="min-w-[80%] md:min-w-[40%] ">
              <div
                className="bg-[url('./hero.jpg')] h-80 w-full snap-center rounded-xl bg-cover bg-center
               shadow-md shadow-black/20"
              ></div>
              <h5 className="mt-5">Pokhara Tour</h5>
              <h6>Saturday - 12 March</h6>
            </div>
            <div className="min-w-[80%] md:min-w-[40%] ">
              <div
                className="bg-[url('./hero.jpg')] h-80 w-full snap-center rounded-xl bg-cover bg-center
               shadow-md shadow-black/20"
              ></div>
              <h5 className="mt-5">Pokhara Tour</h5>
              <h6>Saturday - 12 March</h6>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
