import Image from "next/image";

export function Bestselers() {
  return (
    <div className="product-section-container">
      <h1>Best Sellers</h1>
      <span className="product-section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, omnis
        earum neque nostrum deleniti quo pariatur, porro veniam labore
        doloremque distinctio sed tenetur aliquam molestias illum reiciendis
        quis ullam qui!
      </span>
      <ul className="product-secttion-items-wrapper">
        <li className="product-item">
          <div className="product-image">
            <Image src="/img/product page/Best sellers/01.png" alt="Torquise watch" height={210} width={200}/>
          </div>
          <div className="product-text">
            <span className="product-title">
              Turquoise Light Blue <br />
              Single Wool Smartwatch
            </span>
            <div className="product-purchase">
              <span className="product-price">$300.00</span>
              <button className="blue-button add-to-cart">Add To cart</button>
            </div>
          </div>
        </li>
        <li className="product-item">
          <div className="product-image">
            <Image src="/img/product page/Best sellers/02.png" alt="Torquise watch" height={210} width={200}/>
          </div>
          <div className="product-text">
            <span className="product-title">
              Sunshine Yellow Bright Curve-Edge Tablet
            </span>
            <div className="product-purchase">
              <span className="product-price">$200.00</span>
              <button className="blue-button add-to-cart">Add To cart</button>
            </div>
          </div>
        </li>
        <li className="product-item">
          <div className="product-image">
            <Image src="/img/product page/Best sellers/03.png" alt="Torquise watch" height={210} width={200}/>
          </div>
          <div className="product-text">
            <span className="product-title">
              Candyfloss Pink Two-Earpice HeadPhone
            </span>
            <div className="product-purchase">
              <span className="product-price">$500.00</span>
              <button className="blue-button add-to-cart">Add To cart</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
