import Image from "next/image";
import Link from "next/link";
import HomepageChat from "~/app/(home)/chat";
import Dark from "~/app/(home)/dark";
import { MarqueeDemo } from "~/app/(home)/marquee";
import { Pricing } from "~/app/(home)/pricing";
import GridPattern from "~/components/magicui/grid-pattern";
import LinearGradient from "~/components/magicui/linear-gradient";
import ShimmerButton from "~/components/magicui/shimmer-button";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Hello() {
  return (
    <main className="relative h-screen w-screen overflow-clip overflow-y-auto">
      <GridPattern
        width={80}
        height={80}
        className={cn(
          "inset-x-0 inset-y-[-30%] z-0 h-[100%] skew-y-12",
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="top-0 -z-10 h-fit w-screen place-items-center overflow-x-clip bg-white dark:bg-black">
        <LinearGradient to="rgb(120,119,198,0.2)" direction="top left" />
        <header className="supports-backdrop-blur:bg-background/80 sticky top-0 z-40 m-0 h-16 w-screen overflow-clip backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex flex-row items-center space-x-2">
              <Image
                src="/logo.png"
                alt="remembrall logo"
                width={36}
                height={36}
                className="h-6 w-6"
              />
              <span className="hidden text-2xl font-semibold sm:inline-block">
                Remembrall
              </span>
              <Badge className="hidden sm:inline-block">Beta</Badge>
            </Link>
            <div className="flex flex-row items-center space-x-2">
              <Link className="mr-4 text-lg text-foreground" href="#pricing">
                Pricing
              </Link>
              <Link
                href="https://discord.gg/97W5uAbp2f"
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="h-5 w-5 fill-foreground"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
              </Link>
              <Dark />
            </div>
          </div>
          <div className="absolute bottom-0 h-px w-full bg-[radial-gradient(50%_100%_at_50%_100%,rgba(0,0,0,.12)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(50%_100%_at_50%_100%,rgba(255,255,255,.32)_0%,rgba(255,255,255,0)_100%)]"></div>
        </header>
        {/* <div className="absolute -top-10 h-[80%] w-full">
          <div className="relative h-full w-full">
          </div>
        </div> */}
        <div className="flex w-full  flex-col items-center gap-4 space-y-4 p-8 text-center md:p-8">
          <section className="mx-auto flex max-w-[48rem] flex-col items-center space-y-8 pb-12 pt-20">
            <h1 className="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-800/90 bg-clip-text text-center text-6xl font-semibold leading-none tracking-tight text-transparent dark:from-white dark:to-slate-300/90 md:text-8xl">
              Long-Term Memory for LLMs
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Add two lines of code to your OpenAI call and get observability,
              unlimited long-term memory, retrieval-augmented generation, and
              more.
            </p>
            <Link href="/dashboard">
              <ShimmerButton className="w-fit">
                <span className="whitespace-pre-wrap bg-slate-200  bg-clip-text text-center text-sm font-semibold leading-none tracking-tight dark:text-transparent lg:text-2xl">
                  Get Started Now
                </span>
              </ShimmerButton>
            </Link>
          </section>

          <MarqueeDemo />
        </div>

        <div className="relative -mt-8 h-fit w-screen pt-8">
          <LinearGradient to="rgb(120,119,198,0.2)" direction="bottom right" />

          <div className="relative mx-auto flex aspect-video w-full max-w-6xl rounded-lg border bg-background p-5 shadow-2xl">
            <iframe
              src="https://www.loom.com/embed/5956651e8d394650bbd40267d0af95bb?sid=cd88a03b-0fc5-4bc9-9e0a-ce90fc24d370?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              allowFullScreen
              className="h-full w-full rounded-lg"
            ></iframe>
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 py-8">
            <div className="flex flex-col space-y-8">
              <h3 className="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-800/90 bg-clip-text text-center text-4xl font-semibold leading-none tracking-tight text-transparent dark:from-white dark:to-slate-300/90 md:text-6xl">
                No Memory
              </h3>
              <HomepageChat vanilla={true} />
            </div>
            <div className="flex flex-col space-y-8">
              <h3 className="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-800/90 bg-clip-text text-center text-4xl font-semibold leading-none tracking-tight text-transparent dark:from-white dark:to-slate-300/90 md:text-6xl">
                With Memory
              </h3>
              <HomepageChat />
            </div>
          </div>

          <div className="flex flex-col space-y-4 py-12">
            <h2
              id="pricing"
              className="text-center text-5xl font-semibold leading-none tracking-tight text-foreground "
            >
              Pricing
            </h2>
            <p className="mx-auto max-w-2xl pb-8 text-center text-2xl text-muted-foreground">
              Start using Remembrall for free. Upgrade for API usage in
              production. Export your data for free on any plan.
            </p>
            <Pricing />
          </div>
        </div>
      </div>
    </main>
  );
}
