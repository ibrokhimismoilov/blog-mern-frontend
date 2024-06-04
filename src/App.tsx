import { Suspense, lazy } from "react";
import { Header } from "./components";
import { Container } from "@mui/material";

const Home = lazy(() => import("./pages/Home"));
// const Home = lazy(() => import("./pages/Home"));

function App() {
	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Suspense fallback={"loading..."}>
					<Home />
				</Suspense>
			</Container>
		</>
	);
}

export default App;
