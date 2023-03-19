import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Intro from './../Intro';
import Application from './../Application';
import Auth from './../Auth';
import Feedback from './../Feedback';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				index
				element={<Intro />}
				errorElement={<Intro />}
			/>
			<Route
				path="/app"
				element={<Application />}
			/>
			<Route
				path="/auth"
				element={<Auth />}
			/>
			<Route
				path="/feedback"
				element={<Feedback />}
			/>
		</>
	)
)

export default router;