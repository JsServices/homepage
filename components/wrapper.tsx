import Navbar from "./navbar";
import Footer from "./footer";

export default function wrapper(props) {
	return (
		<>
			<div className="flex flex-col min-h-screen bg-gray-900 md:px-0">
				<Navbar name={props.name} />
					<div className="flex-1">
						<div className="max-w-screen-xl mx-auto text-gray-200 pt-4">
							{props.children}
						</div>
						
					</div>
				<Footer />
			</div>
		</>
	)
}