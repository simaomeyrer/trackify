import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Profile from "../pages/profile"
import ErrorPage from "../pages/error"
import TopSeveral from "../pages/top-tracks"
import TopArtists from "../pages/top-artists"
import Playlist from "../pages/playlist"

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/top-tracks",
    element: <TopSeveral />,
  },
  {
    path: "/top-artists",
    element: <TopArtists />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
])
