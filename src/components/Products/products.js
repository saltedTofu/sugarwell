import ProductImage from '../../productImage.png';
import './products.css';

function Products(){
    return(
        <div id="products">
            <h1 className="sectionTitle">Our Products</h1>
            <div className="productExample">
            <img src={ProductImage} alt="product" />
            <div className="productDescription">
                <h3>Water Softener</h3>
                <p>The Pentair Water Softener is our premium, whole-house, on-demand salt-based water softening system.</p>
                <ul>
                <li>Effectively prevents hard water scale buildup in plumbing and appliances, helping to increase their efficiency and lifespan</li>
                <li>Enjoy softer skin, shinier hair, and softer, right-out-of-the-dryer laundry</li>
                <li>3 unique models to choose from to meet the demands of your home based on your home size (or number of bathrooms)</li>
                </ul>
            </div>
            </div>
            <div className="productExample">
            <img src={ProductImage} alt="product"/>
            <div className="productDescription">
                <h3>Water Purifier</h3>
                <p>The Pentair Water Softener is our premium, whole-house, on-demand salt-based water softening system.</p>
                <ul>
                <li>Effectively prevents hard water scale buildup in plumbing and appliances, helping to increase their efficiency and lifespan</li>
                <li>Enjoy softer skin, shinier hair, and softer, right-out-of-the-dryer laundry</li>
                <li>3 unique models to choose from to meet the demands of your home based on your home size (or number of bathrooms)</li>
                </ul>
            </div>
            </div>
            <div className="productExample">
            <img src={ProductImage} alt="product"/>
            <div className="productDescription">
                <h3>Water Filter</h3>
                <p>The Pentair Water Softener is our premium, whole-house, on-demand salt-based water softening system.</p>
                <ul>
                <li>Effectively prevents hard water scale buildup in plumbing and appliances, helping to increase their efficiency and lifespan</li>
                <li>Enjoy softer skin, shinier hair, and softer, right-out-of-the-dryer laundry</li>
                <li>3 unique models to choose from to meet the demands of your home based on your home size (or number of bathrooms)</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Products;