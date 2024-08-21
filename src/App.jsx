import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom"


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {setLoading(false)})
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-[#f2f7f2]">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div class="flex-col gap-4 w-full h-[100vh] flex items-center justify-center">
      <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          class="animate-ping"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
        </svg>
      </div>
    </div>
  );
}

export default App
