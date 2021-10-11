import Head from "next/head";
import { LocLink } from "./misc";
import nightwind from "nightwind/helper";
import React, { useState, useEffect } from "react";
import { SparklesIcon, SunIcon, XIcon } from "@heroicons/react/outline"



export default function navbar(props) {
	const [darkModeLoc, setDarkModeLoc] = useState(true);
	const [contactOpen, setContactOpen] = useState(false);

	useEffect(function () {
	  setDarkModeLoc(
		(window.localStorage.getItem("nightwind-mode") ?? "dark") == "light"
	  );
	}, []);
  const pageName = (props.name + " | Wave Studios") || "Wave Studios";
  return (
	<>
	  <Head>
			<title>{pageName}</title>
	  </Head>
		<Contact />
	  <nav className="sticky top-0 z-30 bg-opacity-50 h-[4.5rem] bg-gray-50 backdrop-filter backdrop-blur w-full px-1">
		<div className="flex h-full items-center mx-auto justify-between max-w-screen-xl px-4 border-b-2 border-opacity-50 border-gray-500 text-gray-700 font-semibold">
		  <LocLink href="/">
			  <img
				className="rounded-full hover:ring transition h-10" 
				src="/logo.png"
				width="40"
				height="40"
				//quality={90}
				alt="Wave Studios Logo"
			  />
		  </LocLink>
		  <ul className="space-x-8 flex text-gray-600">
			<li className="quick-link">JSBoard</li>
			<li className="quick-link">Case Studys</li>
			<li className="quick-link">Open Source</li>
		  </ul>
		  <ul className="flex items-center gap-4">
			<li className="quick-link" onClick={() => setContactOpen(true)}>Hire Us!</li>
			<li
				className={"has-tooltip relative nightwind-prevent " + props.className}
				onClick={() => nightwind.toggle()}
			>
				<button
				className={
					"p-4 nightwind-prevent select-none relative rounded-full ml-2 transition cursor-pointer duration-700 hover:duration-500 " +
					(darkModeLoc
					? "bg-blue-800 hover:rotate-12"
					: "bg-yellow-400 rotate-180 hover:rotate-90")
				}
				onClick={() => setDarkModeLoc(!darkModeLoc)}
				>
				<SparklesIcon
					className={
					"w-6 h-6 nightwind-prevent absolute bottom-1 right-1 transition duration-700 " +
					(darkModeLoc ? "" : "hidden")
					}
				/>
				<SunIcon
					className={
					"w-6 h-6 nightwind-prevent absolute bottom-1 right-1 transition duration-700 text-gray-900 " +
					(darkModeLoc ? "hidden" : "")
					}
				/>
				</button>
				<span
				className={
					"tooltip nightwind-prevent rounded font-medium shadow-lg p-1 backdrop-filter backdrop-blur-3xl backdrop-saturate-150  mt-14 whitespace-nowrap -left-28 2xl:-left-14 " +
					(darkModeLoc
					? "text-gray-100 bg-gray-200 bg-opacity-30"
					: "text-gray-900 bg-gray-300 bg-opacity-50")
				}
				>
				Switch to {darkModeLoc ? "dark" : "light"} mode
				</span>
			</li>

		  </ul>
		</div>
	  </nav>
	</>
  );
  function Contact() {
		if (contactOpen) {
			return (
				<>
					<div className="z-40 inset-0 fixed backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-branding-50 bg-opacity-40">
						<div className="h-screen flex flex-grow justify-center items-center">
							<div className="bg-gray-100 rounded-md px-8 py-5 relative">
								<XIcon
									className="absolute right-2 top-3 w-6 h-6 p-1 hover:bg-coolGray-100 hover:bg-opacity-40 rounded cursor-pointer text-gray-600 hover:text-branding-200"
									onClick={() => setContactOpen(false)}
								/>
								<h1 className="text-2xl font-medium text-center">
									Change Your Username
								</h1>
								<h2 className="text-sm text-gray-500 text-center mb-6">
									Choose a brand new username for your account!
								</h2>
								<form className="flex flex-col w-full">
									<label className="flex flex-col">
										<span className="text-xs tracking-tight font-medium uppercase text-gray-400 mb-1">
											New Username
										</span>
										<input
											type="text"
											placeholder={props.user}
											className="rounded border-none focus:ring-0"
											name="username"
											maxLength={25}
											minLength={3}
											autoComplete="nickname"
											required
										/>
									</label>
									<input
										type="reset"
										className="link cursor-pointer focus:ring rounded mr-auto mt-1"
									/>
									<input
										type="submit"
										className="ml-auto btn btn-blue"
									/>
								</form>
							</div>
						</div>
					</div>
				</>
			)
		} else {
			return null;
		}
  }
}
