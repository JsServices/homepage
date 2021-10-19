import {
  DotsHorizontalIcon,
  CloudDownloadIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Wrapper from "../components/wrapper";

export default function ddd() {
  return (
    <>
      <Wrapper name="Branding">
        <div className="mx-4">
          <h1 className="font-semibold text-5xl tracking-wide text-center md:text-left mt-6">
            Branding
          </h1>
          <h2 className="font-light text-xl text-gray-600 max-w-2xl mt-2">
            We’re fun and love to lean into the memes (just look at our code
            comments). That said, we're keen on keeping well-kempt. If you wanna
            use our art, keep it clean and forward it to us for approval.{" "}
          </h2>
          <section className="mt-16">
            <h3 className="font-bold text-3xl tracking-wide text-center md:text-left">
              Our Logos
            </h3>
            <p className="font-light text-xl text-gray-600 max-w-3xl mt-2">
              Please do not edit, change, distort, recolor, or reconfigure the
              our logos.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <Pic name="Wave Studios" src="/logos/wave.png" />
              <Pic name="JSBoard" src="/logos/jsboard.png" />
            </div>
          </section>
          <section className="mt-16">
            <h3 className="font-bold text-3xl tracking-wide text-center md:text-left">
              Alternate Logos
            </h3>
            <p className="font-light text-xl text-gray-600 max-w-3xl mt-2">
              Use these only when the our brand(s) are clearly visible or has
              been well established elsewhere on the page or in the design.
              (When in doubt, use the other one.)
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <Pic name="Wave Studios Small" src="/logos/wave-small.png" />
              <Pic name="JSBoard Small" src="/logos/jsboard-small.png" />
            </div>
          </section>
          <section className="mt-16">
            <h3 className="font-bold text-3xl tracking-wide text-center md:text-left">
              Colors
            </h3>
            <p className="font-light text-xl text-gray-600 max-w-3xl mt-2">
              We have a lot of colors used interchangeably between different
              projects. {/*Click on a color to see an approximate list of where
              that color is being used.*/}
            </p>
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
              <Color
                name="Turquoise Snowfield"
                color="bg-[#baf5eb]"
                textColor={true}
              />
              <Color name="Flax Blue" color="bg-[#75c1c9]" textColor={true} />
              <Color
                name="Delphinium Blue"
                color="bg-[#34678c]"
                textColor={false}
              />
              <Color
                name="Clean Black"
                color="bg-[#0a0b0d]"
                textColor={false}
              />
              <Color name="Just Black" color="bg-[#000000]" textColor={false} />
              <Color name="Windy Blue" color="bg-[#1757e3]" textColor={false} />
              <Color name="Cool Gray 50" color="bg-[#bac8d6]" textColor={true} />
              <Color name="Cool Gray 75" color="bg-[#bdc9db]" textColor={true} />
							<Color name="Cool Gray 100" color="bg-[#d3dded]" textColor={true} />
							<Color name="Cool Gray 200" color="bg-[#e6eefc]" textColor={true} />
							<Color name="Cool Gray 700" color="bg-[#2C2F33]" textColor={false} />
							<Color name="Cool Gray 800" color="bg-[#1f2124]" textColor={false} />
							<Color name="Cool Gray 850" color="bg-[#141517]" textColor={false} />
							<Color name="Cool Gray 900" color="bg-[#121314]" textColor={false} />
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

function Pic(props: { name: string; src: string }) {
  return (
    <>
      <div className="flex items-center justify-center p-2 bg-branding-50 bg-opacity-50 rounded">
        <div className="mr-4 flex flex-col items-center">
          <h4 className="font-medium text-lg text-center">{props.name}</h4>
          {/*<DotsHorizontalIcon className="w-6 h-6 text-gray-600" />*/}
          <a href={props.src} download className="p-2">
            <div className="p-2 rounded-full bg-gray-400 bg-opacity-70">
              <CloudDownloadIcon className="w-6 h-6 text-gray-600" />
            </div>
          </a>
        </div>
        <Image
          src={props.src}
          alt={props.name}
          width={150}
          height={150}
          className="select-none"
        />
      </div>
    </>
  );
}

function Color(props: { color: string; name: string; textColor: boolean }) {
  return (
    <>
      <div
        className={
          "p-2 nightwind-prevent rounded h-28 ring-2 " +
          props.color +
          " " +
          (props.textColor ? "text-gray-700" : "text-gray-100")
        }
      >
        <h4 className="text-xl font-bold tracking-wide">{props.name}</h4>
        <p className="font-light">
          {props.color.split("[").pop().replace("]", "")}
        </p>
      </div>
    </>
  );
}
