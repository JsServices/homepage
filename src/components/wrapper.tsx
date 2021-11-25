import Navbar from "./navbar";
import Footer from "./footer";

export default function Wrapper({ children }: { children?: unknown[] }) {
	return (
		<>
			<div className="flex flex-col min-h-screen bg-gray-50 md:px-0">
				<Navbar />
					<div className="flex-1">
						<div className="max-w-screen-xl mx-auto text-gray-700 pt-4">
							{children}
						</div>
					</div>
				<Footer />
			</div>
		</>
	)
}