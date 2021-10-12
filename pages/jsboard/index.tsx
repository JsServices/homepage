import Wrapper from "../../components/wrapper";
import Image from "next/image";

export default function jsboard() {
	return (
		<>
			<Wrapper name="JSBoard">
				<div className="grid place-items-center h-[55vh]">
					<div className="bg-[#2C2F33] rounded-md grid place-items-center"> 
						<Image src="/logos/jsboard.png" alt="JSboard Logo" width={100} height={100} className="rounded" />
						<h1 className="text-5xl font-medium mt-14">JSBoard</h1>
						<h2 className="mt-2 ">JSBoard is a next-generation, community-first forum software written using Nextjs and Mongodb.</h2>
					</div>
				</div>
			</Wrapper>
		</>
	)
}