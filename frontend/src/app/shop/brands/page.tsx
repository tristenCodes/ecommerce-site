const getBrandData = async () => {
    // logic to fetch the data from the backend

    // return brands
}

export default async function Page() {
    const data = await getBrandData();
    return (<div>
        <h1>View All Brands Here</h1>
        {/* map through all brand data and show image etc */}
    </div>)
}
