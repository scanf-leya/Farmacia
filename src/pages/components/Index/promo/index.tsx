import Image from "next/image";


export function Promo() {
  return (
    <div className="promo-container">
      <div className="promo-box">
        <div className="promo-image">
          <Image src="/img/product page/promotion products/01.png" alt="Torquise watch" height={200} width={200}/>
        </div>
        <div className="promo-content">
          <h1>New ARRivals</h1>
          <h2>Sunshine Ipad</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            reiciendis hic totam. Placeat facilis magnam accusamus nihil
            doloremque itaque deserunt aut, quos dicta aliquid, in
            necessitatibus at, beatae labore earum.
          </p>
          <div>
            <button className="white-button">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
