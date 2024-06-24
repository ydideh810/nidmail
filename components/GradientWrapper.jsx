const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative ${props.className || ""}`}>
        <div className={`absolute m-auto blur-[160px] ${props.wrapperClassName || ""}`}
            style={{
                background:
                    "linear-gradient(180deg, #B20000 0%, #FFFFFF 0.01%, #909090 100%)",
            }}>

        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper
