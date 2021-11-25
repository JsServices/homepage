import "./tailwind.css";
import Wrapper from "../components/Wrapper";
import { Box } from "../components/misc";

WJS.page(
  {
    title: "My WaveJS site",
  },
  function Home() {
    return (
      <>
        <Wrapper>
          <div className="h-[calc(100vh-4.5rem)] md:h-[45vh] 3xl:h-[30vh] flex flex-col md:flex-row items-center justify-center md:justify-between mb-16 md:mt-16 relative">
            <svg
              id="svg"
              viewBox="0 0 1440 600"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 right-0 py-2 left-0 dark:opacity-40 opacity-75 md:rounded-b-xl"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="3%"
                  y1="67%"
                  x2="97%"
                  y2="33%"
                >
                  <stop offset="5%" stopColor="#2563eb88"></stop>
                  <stop offset="95%" stopColor="#23c28288"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,600 C 0,600 0,200 0,200 C 71.85645933014354,162.80382775119617 143.71291866028707,125.60765550239233 243,142 C 342.2870813397129,158.39234449760767 469.0047846889952,228.3732057416268 570,256 C 670.9952153110048,283.6267942583732 746.2679425837322,268.8995215311005 839,241 C 931.7320574162678,213.10047846889952 1041.9234449760766,172.0287081339713 1145,163 C 1248.0765550239234,153.9712918660287 1344.0382775119617,176.98564593301435 1440,200 C 1440,200 1440,600 1440,600 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
              <defs>
                <linearGradient
                  id="gradient"
                  x1="3%"
                  y1="67%"
                  x2="97%"
                  y2="33%"
                >
                  <stop offset="5%" stopColor="#2563ebff"></stop>
                  <stop offset="95%" stopColor="#23c282ff"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,600 C 0,600 0,400 0,400 C 90.88038277511961,434.8421052631579 181.76076555023923,469.68421052631584 282,470 C 382.2392344497608,470.31578947368416 491.83732057416273,436.1052631578946 589,401 C 686.1626794258373,365.8947368421054 770.88995215311,329.8947368421053 862,340 C 953.11004784689,350.1052631578947 1050.6028708133972,406.3157894736842 1148,424 C 1245.3971291866028,441.6842105263158 1342.6985645933014,420.8421052631579 1440,400 C 1440,400 1440,600 1440,600 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                className="transition-all duration-300 ease-in-out delay-150 path-1"
              ></path>
            </svg>
            <div className="px-14 lg:px-32 flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
              <div>
                <h1 className="font-semibold text-5xl tracking-wide text-center md:text-left">
                  Wave Studios
                </h1>
                <h2 className="font-light text-xl text-gray-600 pb-72 md:pb-0 text-center mt-5 md:">
                  No templates. No PHP. Just clean, modern code.
                </h2>
              </div>
              <div className="hidden md:block transform -rotate-12 bg-gray-100 py-6 px-4 rounded bg-opacity-75">
                idk what to put here
              </div>
              <div
                className="md:hidden absolute bottom-36 animate-bounce p-4"
                onClick={() =>
                  scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
              >
                V
              </div>
            </div>
          </div>
          <div className="space-y-44 mb-44">
            <Box
              name="JSBoard"
              image="/assets/jsboard-website.png"
              site="/jsboard"
              btn1="Learn More"
              btn2="no"
              linkTo="/jsboard"
              left="no"
							children="Imagine a free, open-source forums software, built for the modern
              web that doesn't take 10 hours to install the packages.
              Introducing JSBoard. A modern forums solution but for the modern
              web. Coming 2022."
            >
              Imagine a free, open-source forums software, built for the modern
              web that doesn't take 10 hours to install the packages.
              Introducing JSBoard. A modern forums solution but for the modern
              web. Coming 2022.
            </Box>
            <Box
              name="Quartz Studios"
              image="/assets/quartz-website.png"
              site="https://quartzstudios.net"
              left="yes"
              btn1="Case Study"
              btn2="yes"
              linkTo="/case-studys/quartzstudios"
							children="Quartz Studios is a Minecraft server creation studio that creates
              high-quality servers, and needed a similarly high-quality,
              professional website to match. Starting with a clean front page
              that will update a playercounter, we carefully handcrafted a
              unique design to show the care and effort put into their
              creations."
            >
              Quartz Studios is a Minecraft server creation studio that creates
              high-quality servers, and needed a similarly high-quality,
              professional website to match. Starting with a clean front page
              that will update a playercounter, we carefully handcrafted a
              unique design to show the care and effort put into their
              creations.
            </Box>
          </div>
        </Wrapper>
      </>
    );
  }
);
