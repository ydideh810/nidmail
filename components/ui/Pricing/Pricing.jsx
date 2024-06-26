import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";

const Pricing = () => {

    const plans = [
        {
            name: "Niddam_yar",
            desc: "For new AI explorers",
            price: 0,
            isMostPop: false,
            features: [
                "Up to four LLM models",
                "Data never leaves your computer",
                "Unlimited editing",
                "Supported browsers: Chrome, Edge",
                "Works Offline",
                "Email support",

            ],
        },
        {
            name: "Niddam_AI",
            desc: "Ideal for growing businesses",
            price: 12,
            isMostPop: true,
            features: [
                "Over 30 LLM Models",
                "Conservations remain after exiting site",
                "Manual data management",
                "Export data as markdown",
                "Share conversations",
                "Export/Import prompt libraries",
            ],
        },
         {
            name: "Niddam_Ulti",
            desc: "New Frontier",
            price: 0,
            isMostPop: false,
            features: [
                "COMMING SOON",

            ],
        }
        
    ];

    const mostPopPricingBg = "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #909090 0%, rgba(31, 41, 55, 0) 100%)"

    return (
        <SectionWrapper id="pricing" className='custom-screen'>
            <div className='relative max-w-xl mx-auto text-center'>
                <h2 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                   Here are your options
                </h2>
            </div>
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 ${item.isMostPop ? "border border-red-500" : ""}`}
                                style={{
                                    backgroundImage: item.isMostPop ? mostPopPricingBg : ""
                                }}
                            >
                                <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                                    <span className='text-red-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-50 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-400 font-normal">/mo</span>
                                    </div>
                                    <p className="text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5 text-gray-300'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-red-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="pt-8">
                                         <a href="https://linktr.ee/Niddam">
                                        <Button className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? "bg-red-600 hover:bg-red-500 focus:bg-red-700 ring-red-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            Start Now
                                        </Button>
                                             </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </LayoutEffect>
        </SectionWrapper>
    );
};

export default Pricing
