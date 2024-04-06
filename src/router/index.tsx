import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Profile from "../pages/profile"
import ErrorPage from "../pages/error"
import TopSeveral from "../pages/top-tracks"
import TopArtists from "../pages/top-artists"
import Playlist from "../pages/playlist"
import PrivacyPolice from "../pages/privacy-police"
import About from "../pages/about/about"
import Blog from "../pages/blog"
import Post1 from "../pages/blog/post-1"
import Post2 from "../pages/blog/post-2"

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
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
    path: "/about",
    element: <About />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolice />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/always-the-same-music",
    element: <Post1 />,
  },
  {
    path: "/blog/tunefind",
    element: <Post2 />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
])
