//import { SparklesIcon, SunIcon } from "@heroicons/react/outline"




export default function Navbar(props: any) {
	/*const [darkModeLoc, setDarkModeLoc] = useState(true);

	useEffect(function () {
	  setDarkModeLoc(
		(window.localStorage.getItem("nightwind-mode") ?? "dark") == "light"
	  );
	}, []);
  const pageName = (props.name + " | Wave Studios") || "Wave Studios";*/
  return (
	<>
	  <nav className="sticky top-0 z-30 bg-opacity-50 h-[4.5rem] bg-gray-50 backdrop-filter backdrop-blur w-full px-1">
		<div className="flex h-full items-center mx-auto justify-between max-w-screen-xl px-4 border-b-2 border-opacity-50 border-gray-500 text-gray-700 font-semibold">
		  {/*<LocLink href="/">
			  <img
				className="rounded-full hover:ring transition h-10" 
				src="/logos/wave.png"
				width="40"
				height="40"
				//quality={90}
				alt="Wave Studios Logo"
			  />
	</LocLink>*/}
		  <ul className="space-x-8 flex text-gray-600">
			<li className="quick-link"><div href="/jsboard"><a>JSBoard</a></div></li>
			<li className="quick-link">Case Studies</li> 
			<li className="quick-link">Open Source</li>
		  </ul>
		  <ul className="flex items-center gap-4">
			<li className="quick-link"><div href="/contact"><a>Contact Us!</a></div></li>
			<li
				className={"has-tooltip relative nightwind-prevent "}
				//onClick={() => nightwind.toggle()}
			>
				<button name="Toggle Dark/Light theme"
				className={
					"p-4 nightwind-prevent select-none relative rounded-full ml-2 transition cursor-pointer duration-700 hover:duration-500 " /*+
					(darkModeLoc
					? "bg-yellow-400 rotate-180 hover:rotate-90" : 
					"bg-blue-800 hover:rotate-12"
					)*/
				}
				//onClick={() => setDarkModeLoc(!darkModeLoc)}
				>
				{/*<SparklesIcon
					className={
					"w-6 h-6 nightwind-prevent absolute bottom-1 right-1 transition duration-700 " /*+
					(darkModeLoc ? "hidden" : "")
					
				/>
				<SunIcon
					className={
					"w-6 h-6 nightwind-prevent absolute bottom-1 right-1 transition duration-700 text-gray-900 " /*+
					(darkModeLoc ? "" : "hidden")
					}
				/>*/}
				</button>
				<span
				className={
					"tooltip nightwind-prevent rounded font-medium shadow-lg p-1 backdrop-filter backdrop-blur-3xl backdrop-saturate-150  mt-14 whitespace-nowrap -left-28 2xl:-left-14 " /*+
					(!darkModeLoc
					? "text-gray-100 bg-gray-200 bg-opacity-30"
					: "text-gray-900 bg-gray-300 bg-opacity-50")*/
				}
				>
				Switch to {/*darkModeLoc ? "dark" : */"light"} mode
				</span>
			</li>

		  </ul>
		</div>
	  </nav>
	</>
  );
  
}