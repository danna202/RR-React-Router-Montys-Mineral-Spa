

export default function Packages({ packages }) {
    const display = packages.map((elem, i) => {
        return <li key={i}>{elem}</li>
    })

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                {display}
            </div>
        </div>
    )
}