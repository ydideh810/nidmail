import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "Where is my data stored?",
        a: "Data is stored in the browser. In Niddam_yar, All info is deleted upon refreshing the browser or exiting the tab.",
    },
    {
        q: "Can this app worked offline?",
        a: "Once the chosen model is initially loaded, you can turn off your Wifi and use Niddam as usual.",
    },
    {
        q: "Is authentication required?",
        a: "Nope. No authentication required as Niddam is a private AI. Private meaning your data does not get send to any third-party.",
    },
    {
        q: "Is Niddam it's own LLM?",
        a: "No. Niddam is a web interface for various LLMs that is designed to make it act as one.",
    },
    {
        q: "Why should I use Niddam?",
        a: "Without authentication, you can access a host of open-source LLMs in a seamless manner with the surety that your data is safe and away from Big Tech!",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    FAQ
                </h2>
                <p className="mt-3">
                    What You Need To Know
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs
