import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Pricing from "../Pages/Pricing/Pricing";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import MeetingSchedule from "./../Pages/MeetingSchedule/MeetingSchedule";
import Meetings from "../Pages/Meetings/Meetings";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import MyMeetings from "../Pages/MyMeetings/MyMeetings";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
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
				path: "/contact",
				element: <Contact />,
			},
			// {
			// 	path: "/userProfile",
			// 	element: (
			// 		<PrivateRoute>
			// 			<UserProfile />,
			// 		</PrivateRoute>
			// 	),
			// },
			{
				path: "/meetings",
				element: (
					<PrivateRoute>
						<Meetings></Meetings>
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
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard/userProfile",
				element: <UserProfile />,
			},
			{
				path: "/dashboard/schedule",
				element: <MeetingSchedule />,
			},
			{
				path: "/dashboard/myMeetings",
				element: <MyMeetings />,
			},
		],
	},
]);
