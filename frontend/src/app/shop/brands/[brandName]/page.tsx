const getBrandData = async ({ params }: { params: { brandName: string } }) => {
    // logic to fetch the data from the backend, unsure if the params will work
    const { brandName } = params;
    console.log("under [brandname], brandName is ", brandName);
    
    // return product data
}

export default function Page({ params }: { params: { brandName: string } }) {
    const { brandName } = params;
    return <div>Brand Name: {brandName}</div>
}
