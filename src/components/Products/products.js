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
                <h3>RO</h3>
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
                <h3>Ice Maker System</h3>
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
/*
react slick carousel
RO 2 pics
Ice maker 2 pics
product drop down in header
products router, remove from home page
use react router for multiple pages
    -less content on home
    -page for each product category (water softener, RO, ice maker, bidet)
make logo in header link to home
put reviews on front page
puregen.com
google business profile?
aquatechHTX@gmail.com
*/
export default Products;