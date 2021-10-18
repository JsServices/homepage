export default function Contact() {
    return (
        <>
      <form className="flex flex-col w-full" method="POST" data-netlify="true" name="contact" action="/" netlify-honeypot="reason">
        <input type="hidden" name="form-name" value="contact" />
		<p className="hidden">
			<label>Don’t fill this out if you’re human: <input name="reason" /></label>
		</p>
									<div className="space-y-3">
										<label className="flex flex-col">
											<span className="text-xs tracking-tight font-medium uppercase text-gray-400 mb-1">
												Name
											</span>
											<input
												type="text"
												className="rounded border-none focus:ring-0 p-0.5"
												name="name"
												maxLength={25}
												minLength={3}
												autoComplete="name"
												required
											/>
										</label>
										<label className="flex flex-col">
											<span className="text-xs tracking-tight font-medium uppercase text-gray-400 mb-1">
												Email
											</span>
											<input
												type="text"
												className="rounded border-none focus:ring-0 p-0.5"
												name="email"
												maxLength={25}
												minLength={3}
												autoComplete="email"
												required
											/>
										</label>
										<label className="flex flex-col">
											<span className="text-xs tracking-tight font-medium uppercase text-gray-400 mb-1">
												Message
											</span>
											<textarea
												className="rounded border-none focus:ring-0 p-0.5"
												name="message"
												maxLength={2000}
												minLength={3}
												required
											/>
										</label>
									</div>
									<input
										type="reset"
										className="link cursor-pointer focus:ring rounded mr-auto mt-1 bg-transparent"
										value="Clear"
									/>
									<input
										type="submit"
										className="ml-auto btn bg-blue-500 text-gray-200 font-bold rounded nightwind-prevent w-full px-auto mt-6 lg:mt-2 lg:w-auto"
										value="Send"
									/>
        </form>
      </>
    )
}