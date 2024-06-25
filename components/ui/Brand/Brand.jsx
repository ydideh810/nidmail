import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/corner.png"
        alt="Niddam logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand
