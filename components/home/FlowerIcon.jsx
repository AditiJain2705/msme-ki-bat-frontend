const FlowerIcon = ({
    color = "#ffffff",
    size = 45,
    className = "",
}) => {
    return (
        <div className="-rotate-30">
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <g fill={color} transform="translate(50 50)">

                    {/* Top Petal */}
                    <path d="M0 -35 C12 -15 12 -5 0 0 C-12 -5 -12 -15 0 -35 Z" />

                    {/* Right Petal */}
                    <path
                        d="M0 -35 C12 -15 12 -5 0 0 C-12 -5 -12 -15 0 -35 Z"
                        transform="rotate(90)"
                    />

                    {/* Bottom Petal */}
                    <path
                        d="M0 -35 C12 -15 12 -5 0 0 C-12 -5 -12 -15 0 -35 Z"
                        transform="rotate(180)"
                    />

                    {/* Left Petal */}
                    <path
                        d="M0 -35 C12 -15 12 -5 0 0 C-12 -5 -12 -15 0 -35 Z"
                        transform="rotate(270)"
                    />
                </g>
            </svg>
        </div>

    );
};

export default FlowerIcon;
