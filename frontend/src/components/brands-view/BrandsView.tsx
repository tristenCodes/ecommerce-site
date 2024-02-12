import { Product } from "@/types/types"


const BrandView = ({ arrayOfProducts }: { arrayOfProducts: Product[] }) => {
    return (
        <div>
            {arrayOfProducts.map((product) => {
                return (<div key={product.id}><h2>{product.name}</h2>
                    <img src={product.src} alt={product.name} /></div>)
            })}
        </div>
    )
}