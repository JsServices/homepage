export function Box(props: {children: any, linkTo: string, name: string, left: string, btn1: string, btn2: string, site: string, image: string}) {
	return (
		<>
			<div className={"flex flex-col-reverse place-items-center justify-between mx-4 lg:mx-0 " + (props.left == "yes" ? "md:flex-row-reverse" : "md:flex-row")}>
            <div className="max-w-lg flex flex-col">
              <h1 className="font-semibold text-4xl tracking-wide mt-5 lg:mt-0">{props.name}</h1>
              <p className="mt-4">{props.children}</p>
              
              <div className="my-6 flex items-center space-x-4">
                <a href={props.linkTo} className="btn bg-[#1467b5] rounded-lg font-semibold dark:text-gray-300 text-gray-100">
                  {props.btn1}
                </a>
								{props.btn2 == "yes" ? 
                <a href={props.site} className="btn ring ring-[#1467b5] rounded-lg font-semibold flex hover:bg-[#1467b5]" target="_blank" rel="noopener noreferrer">
                  {/*TODO: Use heroions svg*/}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  See it live 
                </a> : ""}
              </div>
            </div>
            <a href={props.site} target="_blank" className="!rounded-xl" rel="noopener noreferrer">
              <img 
                className="!rounded-xl !hover:rounded-xl hover:scale-110 transform transition duration-1000 lmao-next-image-bad"
                src={props.image}
                width={600}
                height={350}         
                quality={100}
                alt="Example image"
                //layout="fixed"
              />
            </a>
            <style jsx global>{`
              .lmao-next-image-bad:hover {
                border-radius: 0.75rem;
              }
            `}
            </style>
          </div>
		</>
	)
}