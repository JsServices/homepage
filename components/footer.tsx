import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

export default function footer(props) {
	const [productsOpen, setProductsOpen] = useState(false);
	const [supportOpen, setSupportOpen] = useState(false);
	const [rssOpen, setRssOpen] = useState(false);
	function open(what: string) {
		if (!what) {
			throw new Error("Pls provide a what ty")
		} else if (what == "Products") {
			setProductsOpen(!productsOpen);
			if (productsOpen == false) {
				setSupportOpen(false);
				setRssOpen(false);
			}
		} else if (what == "Support") {
			setSupportOpen(!supportOpen);
			if (supportOpen == false) {
				setProductsOpen(false);
				setRssOpen(false);
			}
		} else if (what == "Rss") {
			setRssOpen(!rssOpen);
			if (rssOpen == false) {
				setSupportOpen(false);
				setProductsOpen(false);
			}
		}
		scrollTo(0, document.body.scrollHeight + 1000);

	}
	return (
		<div className="relative w-full">
			
			<svg viewBox="0 350 900 240" width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" className="dark:opacity-50 opacity-90"><path d="M0 430L21.5 423.3C43 416.7 86 403.3 128.8 403.7C171.7 404 214.3 418 257.2 424.3C300 430.7 343 429.3 385.8 427.7C428.7 426 471.3 424 514.2 413.5C557 403 600 384 642.8 375.5C685.7 367 728.3 369 771.2 380C814 391 857 411 878.5 421L900 431L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#1364ad"></path><path d="M0 417L21.5 425.2C43 433.3 86 449.7 128.8 449.5C171.7 449.3 214.3 432.7 257.2 424C300 415.3 343 414.7 385.8 422.7C428.7 430.7 471.3 447.3 514.2 449.8C557 452.3 600 440.7 642.8 437.5C685.7 434.3 728.3 439.7 771.2 448.2C814 456.7 857 468.3 878.5 474.2L900 480L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#11599a"></path><path d="M0 472L21.5 475.7C43 479.3 86 486.7 128.8 485C171.7 483.3 214.3 472.7 257.2 472.2C300 471.7 343 481.3 385.8 477.8C428.7 474.3 471.3 457.7 514.2 450.3C557 443 600 445 642.8 447.8C685.7 450.7 728.3 454.3 771.2 457.8C814 461.3 857 464.7 878.5 466.3L900 468L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#104f88"></path><path d="M0 540L21.5 532.5C43 525 86 510 128.8 507C171.7 504 214.3 513 257.2 519.5C300 526 343 530 385.8 523.5C428.7 517 471.3 500 514.2 494.3C557 488.7 600 494.3 642.8 495.8C685.7 497.3 728.3 494.7 771.2 494C814 493.3 857 494.7 878.5 495.3L900 496L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#0f4576"></path><path d="M0 569L21.5 569.2C43 569.3 86 569.7 128.8 566.8C171.7 564 214.3 558 257.2 550.7C300 543.3 343 534.7 385.8 537.5C428.7 540.3 471.3 554.7 514.2 559.5C557 564.3 600 559.7 642.8 559.8C685.7 560 728.3 565 771.2 568.2C814 571.3 857 572.7 878.5 573.3L900 574L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#0f3b64"></path></svg>
			<div className="bg-[#0f3b64] dark:bg-opacity-50 bg-opacity-90 pb-4">
				<div className=" mx-auto max-w-screen-xl px-4 text-gray-700  space-y-10 flex flex-col items-center md:grid grid-cols-2">
					<div>
						<h2 className="font-semibold text-3xl text-gray-200 nightwind-prevent">Wave Studios</h2>
						<p className="pb-4 text-sm font-medium text-gray-200 filter brightness-[0.85] nightwind-prevent text-center md:text-left">&#169; 2021 Wave Studios&trade;</p>
						<div className="flex justify-center md:justify-start space-x-4">
							<a href="https://github.com/wave-studio" target="_blank" rel="noopener noreferrer" className="has-tooltip relative">
								<span className="tooltip nightwind-prevent rounded font-medium shadow-lg p-1 absolute -top-10 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 whitespace-nowrap text-gray-100 bg-gray-200 bg-opacity-30">Throw us a star and see our code!</span>
								<svg fill="currentColor" className="flex-none text-[#171515] opacity-90 hover:shadow-2xl cursor-pointer transition w-12 h-12"><rect width="48" height="48" rx="12"></rect><path d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z" fill="currentColor" className="text-gray-50  nightwind-prevent"></path></svg>
							</a>
							<a href="https://discord.gg/yrwUpMcfcR" target="_blank" rel="noopener noreferrer" className="has-tooltip relative">
								<span className="tooltip nightwind-prevent rounded font-medium shadow-lg p-1 absolute -top-10 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 whitespace-nowrap text-gray-100 bg-gray-200 bg-opacity-30">Get support or chat with our community!</span>
								<svg fill="currentColor" className="flex-none text-[#5865F2] opacity-90 hover:shadow-2xl cursor-pointer transition w-12 h-12"><rect width="48" height="48" rx="12"></rect><path d="M21.637 23.57c-.745 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.744 0 1.332-.653 1.332-1.45.013-.797-.588-1.45-1.332-1.45zm4.767 0c-.744 0-1.332.653-1.332 1.45 0 .797.6 1.45 1.332 1.45.745 0 1.332-.653 1.332-1.45 0-.797-.587-1.45-1.332-1.45z" fill="currentColor" className="text-indigo-50 nightwind-prevent"></path><path d="M32.75 12.613H15.248a2.684 2.684 0 00-2.678 2.69v17.66a2.684 2.684 0 002.678 2.69h14.811l-.692-2.416 1.672 1.554 1.58 1.463 2.809 2.482V15.304a2.684 2.684 0 00-2.678-2.69zm-5.042 17.058s-.47-.561-.862-1.058c1.711-.483 2.364-1.554 2.364-1.554-.535.353-1.045.6-1.502.77a8.591 8.591 0 01-1.894.562 9.151 9.151 0 01-3.383-.013 10.964 10.964 0 01-1.92-.561 7.652 7.652 0 01-.953-.445c-.04-.026-.078-.039-.117-.065-.027-.013-.04-.026-.053-.039-.235-.13-.365-.222-.365-.222s.627 1.045 2.285 1.541c-.392.497-.875 1.084-.875 1.084-2.886-.091-3.983-1.985-3.983-1.985 0-4.206 1.88-7.615 1.88-7.615C20.211 18.661 22 18.7 22 18.7l.131.157c-2.35.679-3.435 1.71-3.435 1.71s.287-.156.77-.378c1.398-.614 2.508-.784 2.965-.823.079-.013.144-.026.223-.026a10.647 10.647 0 016.57 1.228s-1.033-.98-3.253-1.66l.183-.208s1.79-.04 3.67 1.371c0 0 1.881 3.41 1.881 7.615 0 0-1.11 1.894-3.997 1.985z" fill="currentColor" className="text-indigo-50 nightwind-prevent"></path></svg>
							</a> 
						</div>
					</div>
					<div className="grid md:grid-cols-3 space-y-6 md:space-y-0 text-gray-200 nightwind-prevent">
						<ul className="space-y-2">
							<li className="tracking-wider font-medium filter brightness-95 flex" onClick={() => open("Products")}>Products <ChevronDownIcon className={"w-4 h-4 ml-1 mt-1 " + (productsOpen ? "" : "hidden")} /> <ChevronRightIcon className={"w-4 h-4 ml-1 mt-1 " + (productsOpen ? "hidden" : "md:hidden")} /> </li>
							<li className={"text-sm link " + (productsOpen ? "" : "hidden md:block")}><Link href="/jsboard"><a>JSBoard</a></Link></li>
							<li className={"text-sm link " + (productsOpen ? "" : "hidden md:block")}><Link href="/bidome"><a>Bidome Bot</a></Link></li>
							{/*<li className="text-sm link"><Link href="t"><a>amongus</a></Link></li>*/}
						</ul>
						<ul className="space-y-2">
							<li className="tracking-wider font-medium filter brightness-95 flex"  onClick={() => open("Support")}>Support <ChevronDownIcon className={"w-4 h-4 ml-1 mt-1 " + (supportOpen ? "" : "hidden")} /> <ChevronRightIcon className={"w-4 h-4 ml-1 mt-1 " + (supportOpen ? "hidden" : "md:hidden")} /> </li>
							<li className={"text-sm link " + (supportOpen ? "" : "hidden md:block")}><Link href="contact"><a>Contact Us</a></Link></li>

						</ul>
						<ul className="space-y-2">
							<li className="tracking-wider font-medium filter brightness-95 flex" onClick={() => open("Rss")}>Resources <ChevronDownIcon className={"w-4 h-4 ml-1 mt-1 " + (rssOpen ? "" : "hidden")} /> <ChevronRightIcon className={"w-4 h-4 ml-1 mt-1 " + (rssOpen ? "hidden" : "md:hidden")} /> </li>
							<li className={"text-sm link " + (rssOpen ? "" : "hidden md:block")}><Link href="/resources/privacy"><a>Privacy Policy</a></Link></li>
							<li className={"text-sm link " + (rssOpen ? "" : "hidden md:block")}><Link href="/resources/about"><a>Who we are</a></Link></li>
							<li className={"text-sm link " + (rssOpen ? "" : "hidden md:block")}><Link href="/sitemap.xml"><a>Site Map</a></Link></li>
							<li className={"text-sm link " + (rssOpen ? "" : "hidden md:block")}><Link href="/branding"><a>Branding</a></Link></li>
						</ul>
					</div>
				</div>
			</div>		
		</div>
	)
}

