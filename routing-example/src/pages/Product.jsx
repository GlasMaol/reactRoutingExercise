import { useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams()

    return (
        <div>
            <h1>The Product nr is: {id}</h1>
        </div>
    )
}

export default Product
