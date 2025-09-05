export const RetailDistributorsList = ({ retailer }) => {
    return (
        <section>
            <h2 className="mb-[.5rem] text-xl font-semibold">Distributor</h2>
            <h3>{retailer?.distributor.name}</h3>
        </section>
    )
}
