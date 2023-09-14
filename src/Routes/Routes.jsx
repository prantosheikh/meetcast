import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserManagement from "./../Pages/UserManagement/UserManagement";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyMeetings from "../Pages/MyMeetings/MyMeetings";
import Pricing from "../Pages/Pricing/Pricing";
import RoomPage from "../Pages/RoomPage/RoomPage";
import SignUp from "../Pages/SignUp/SignUp";
import EditUserProfile from "../Pages/UserProfile/EditUserProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MeetingSchedule from "./../Pages/MeetingSchedule/MeetingSchedule";
import PrivateRoute from "./PrivateRoute";
import BlogPage from "../Pages/Blog/BlogPage";
import AddBlog from "../Pages/AddBlog/AddBlog";
import ChatRoom from "../Pages/Meetings/ChatRoom";
import AdminHome from "../Pages/AdminHome/AdminHome";
import EditorHome from "../Pages/EditorHome/EditorHome";
import EditorRoute from "./EditorRoute";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/pricing",
				element: <Pricing />,
			},
			{
				path: "/blog",
				element: <BlogPage />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/checkout/:id",
				element: (
					<PrivateRoute>
						<CheckOut />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`${import.meta.env.VITE_API_URL}/checkout/${params.id}`),
			},
			{
				path: "/meetings",
				element: (
					<PrivateRoute>
						<ChatRoom></ChatRoom>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/room/:roomID",
		element: <RoomPage />,
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard/admin-home",
				element: (
					<AdminRoute>
						<AdminHome />
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/editor-home",
				element: (
					<EditorRoute>
						<EditorHome />
					</EditorRoute>
				),
			},
			{
				path: "/dashboard/add-blog",
				element: <AddBlog />,
			},
			{
				path: "/dashboard/userProfile",
				element: <UserProfile />,
			},
			{
				path: "/dashboard/editUserProfile",
				element: <EditUserProfile />,
			},
			{
				path: "/dashboard/schedule",
				element: <MeetingSchedule />,
			},
			{
				path: "/dashboard/myMeetings",
				element: <MyMeetings />,
			},
			{
				path: "/dashboard/UserManagement",
				element: <UserManagement />,
			},
		],
	},
]);
