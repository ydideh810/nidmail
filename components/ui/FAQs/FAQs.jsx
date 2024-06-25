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
        q: "How do I get started with an email marketing tool?",
        a: "To get started with an email marketing tool, you will need to sign up for an account with our provider, Once you have signed up for an account, you can start.",
    },
    {
        q: "How does an AI-powered email marketing tool work?",
        a: "Social media is a great place for businesses because it has the An AI-powered email marketing tool works by analyzing customer data to identify patterns and trends in order to create more targeted campaigns.",
    },
    {
        q: "What are the benefits of using an AI-powered email marketing tool?",
        a: "AI-powered email marketing tools can help marketers save time and money by automating tasks such as segmentation, personalization, content optimization, and more.",
    },
    {
        q: "Can I sell my digital products using Mailgo?",
        a: "Of course you can market and sell your digital products and subscriptions with Mailgo to drive higher conversions and save big on fees.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    What You Need To Know
                </h2>
                <p className="mt-3">
                    Why you should Niddam as your AI partner.
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
