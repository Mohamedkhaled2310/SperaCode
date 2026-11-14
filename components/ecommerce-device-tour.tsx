'use client'

import Image from 'next/image'

type Product = {
  id: string
  image: string
  en: string
  ar: string
  categoryEn: string
  categoryAr: string
  priceEn: string
  priceAr: string
  oldPriceEn: string
  oldPriceAr: string
  rating: string
  reviews: string
}

const products: Product[] = [
  { id: 'headphones', image: '/earbuds-product.png', en: 'Studio Wireless Headphones', ar: 'سماعات ستوديو اللاسلكية', categoryEn: 'Audio', categoryAr: 'صوتيات', priceEn: 'EGP 2,499', priceAr: '٢٬٤٩٩ ج.م', oldPriceEn: 'EGP 2,999', oldPriceAr: '٢٬٩٩٩ ج.م', rating: '4.9', reviews: '128' },
  { id: 'watch', image: '/watch-product.png', en: 'Core Smart Watch', ar: 'ساعة كور الذكية', categoryEn: 'Wearables', categoryAr: 'أجهزة ذكية', priceEn: 'EGP 3,799', priceAr: '٣٬٧٩٩ ج.م', oldPriceEn: 'EGP 4,299', oldPriceAr: '٤٬٢٩٩ ج.م', rating: '4.8', reviews: '96' },
  { id: 'speaker', image: '/speaker-product.png', en: 'Mini Bluetooth Speaker', ar: 'سماعة ميني بلوتوث', categoryEn: 'Audio', categoryAr: 'صوتيات', priceEn: 'EGP 1,899', priceAr: '١٬٨٩٩ ج.م', oldPriceEn: 'EGP 2,299', oldPriceAr: '٢٬٢٩٩ ج.م', rating: '4.9', reviews: '74' },
]

export function EcommerceDeviceTour({ rtl }: { rtl: boolean }) {
  const productName = (product: Product) => rtl ? product.ar : product.en
  const price = (product: Product) => rtl ? product.priceAr : product.priceEn
  const oldPrice = (product: Product) => rtl ? product.oldPriceAr : product.oldPriceEn

  return (
    <div className="hero-screen-animation" aria-hidden="true">
      <div className="laptop-browser">
        <div className="demo-topbar">
          <strong className="demo-brand">Spera<span>Store</span></strong>
          <span className="demo-address">sperastore.eg</span>
          <span className="demo-window-dots"><i/><i/><i/></span>
        </div>
        <div className="demo-page-window">
          <div className="demo-site-track">
            <section className="demo-site-page demo-home">
              <div className="demo-nav"><b>Spera<span>Store</span></b><span>{rtl ? 'الرئيسية　 المنتجات　 العروض' : 'Home　 Shop　 Offers'}</span><i>{rtl ? 'السلة ٢' : 'Bag 2'}</i></div>
              <div className="demo-home-copy">
                <small>{rtl ? 'توصيل مجاني فوق ١٬٥٠٠ ج.م' : 'FREE SHIPPING OVER EGP 1,500'}</small>
                <h2>{rtl ? <>تقنية أذكى،<br/>لحياتك اليومية</> : <>A smarter kind<br/>of everyday</>}</h2>
                <p>{rtl ? 'اختيارات مميزة. جودة تثق بها.' : 'Thoughtful picks. Everyday essentials.'}</p>
                <span className="demo-shop-button">{rtl ? 'تسوق الآن　 ←' : 'Shop now　 →'}</span>
              </div>
              <div className="demo-home-product">
                <span className="demo-sale-pill">{rtl ? 'الأكثر مبيعًا' : 'BESTSELLER'}</span>
                <Image src={products[0].image} alt="" width={400} height={400} />
                <div><span>{productName(products[0])}</span><b>{price(products[0])}</b></div>
              </div>
              <div className="demo-home-trust">{rtl ? 'دفع آمن　 •　 استبدال سهل　 •　 منتجات أصلية' : 'Secure checkout　 •　 Easy returns　 •　 100% authentic'}</div>
            </section>
            <section className="demo-site-page demo-products">
              <small>{rtl ? 'مختارة لك' : 'CURATED FOR YOU'}</small>
              <div className="demo-title-row"><h2>{rtl ? 'اكتشف الأكثر مبيعًا' : 'Shop best sellers'}</h2><span>{rtl ? 'كل المنتجات ←' : 'View all →'}</span></div>
              <div className="demo-product-grid">
                {products.map(product => (
                  <article key={product.id}>
                    <div className="demo-product-photo"><Image src={product.image} alt="" width={320} height={320}/><span>{rtl ? 'الأكثر طلبًا' : 'POPULAR'}</span></div>
                    <span className="demo-product-category">{rtl ? product.categoryAr : product.categoryEn}　 ★ {product.rating} ({product.reviews})</span>
                    <b>{productName(product)}</b>
                    <div className="demo-product-price"><strong>{price(product)}</strong><del>{oldPrice(product)}</del></div>
                  </article>
                ))}
              </div>
            </section>
            <section className="demo-site-page demo-detail">
              <small>{rtl ? 'اختيار العملاء' : 'CUSTOMER FAVORITE'}</small>
              <div className="demo-detail-layout">
                <div className="demo-detail-photo"><Image src={products[1].image} alt="" width={500} height={500}/></div>
                <div className="demo-detail-copy">
                  <span className="demo-product-category">{rtl ? 'أجهزة ذكية　 ★ 4.8 (96 تقييم)' : 'WEARABLES　 ★ 4.8 (96 reviews)'}</span>
                  <h2>{productName(products[1])}</h2>
                  <p>{rtl ? 'تابع يومك بسهولة مع تصميم أنيق وبطارية تدوم طويلًا.' : 'Track your day with a refined design and all-day battery.'}</p>
                  <div className="demo-product-price"><strong>{price(products[1])}</strong><del>{oldPrice(products[1])}</del></div>
                  <span className="demo-stock">{rtl ? 'متوفر — جاهز للشحن' : 'In stock — ready to ship'}</span>
                  <span className="demo-shop-button">{rtl ? 'أضف إلى السلة　 +' : 'Add to bag　 +'}</span>
                </div>
              </div>
            </section>
            <section className="demo-site-page demo-checkout">
              <small>{rtl ? 'سلة التسوق　 /　 إتمام الطلب' : 'YOUR BAG　 /　 CHECKOUT'}</small>
              <h2>{rtl ? 'طلبك جاهز' : 'Your bag is ready'}</h2>
              <div className="demo-cart-layout">
                <div className="demo-cart-items">
                  {[products[0], products[2]].map(product => (
                    <article key={product.id}><Image src={product.image} alt="" width={90} height={90}/><div><b>{productName(product)}</b><span>{rtl ? 'الكمية: ١' : 'Qty: 1'}</span><strong>{price(product)}</strong></div></article>
                  ))}
                </div>
                <div className="demo-order-summary"><b>{rtl ? 'ملخص الطلب' : 'Order summary'}</b><span>{rtl ? 'الإجمالي الفرعي' : 'Subtotal'}<i>{rtl ? '٤٬٣٩٨ ج.م' : 'EGP 4,398'}</i></span><span>{rtl ? 'الشحن' : 'Shipping'}<i>{rtl ? 'مجاني' : 'Free'}</i></span><strong>{rtl ? 'الإجمالي　٤٬٣٩٨ ج.م' : 'Total　EGP 4,398'}</strong><span className="demo-shop-button">{rtl ? 'تابع للدفع الآمن　 ←' : 'Continue to secure checkout　 →'}</span></div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="phone-browser">
        <div className="phone-site-window">
          <div className="phone-site-track">
            <section className="phone-site-page phone-home">
              <b>Spera<span>Store</span></b><small>{rtl ? 'توصيل مجاني فوق ١٬٥٠٠ ج.م' : 'FREE SHIPPING OVER EGP 1,500'}</small>
              <strong>{rtl ? 'تقنية أذكى لحياتك اليومية' : 'A smarter kind of everyday'}</strong>
              <span className="phone-product-photo"><Image src={products[0].image} alt="" width={180} height={180}/></span>
              <span className="phone-shop-price">{price(products[0])}</span>
            </section>
            <section className="phone-site-page phone-services">
              <b>{rtl ? 'الأكثر مبيعًا' : 'Best sellers'}</b>
              {products.map(product => <span className="phone-product-row" key={product.id}><Image src={product.image} alt="" width={90} height={90}/><i>{productName(product)}<strong>{price(product)}</strong></i></span>)}
            </section>
            <section className="phone-site-page phone-work">
              <b>{productName(products[1])}</b><span className="phone-product-photo"><Image src={products[1].image} alt="" width={180} height={180}/></span>
              <strong>{price(products[1])}</strong><span className="phone-add-button">{rtl ? 'أضف إلى السلة +' : 'Add to bag +'}</span>
              <i>{rtl ? 'متوفر　 ★ 4.8' : 'In stock　 ★ 4.8'}</i>
            </section>
            <section className="phone-site-page phone-results">
              <b>{rtl ? 'سلة التسوق' : 'Your bag'}</b>
              <span className="phone-product-row"><Image src={products[0].image} alt="" width={90} height={90}/><i>{productName(products[0])}<strong>{price(products[0])}</strong></i></span>
              <span className="phone-product-row"><Image src={products[2].image} alt="" width={90} height={90}/><i>{productName(products[2])}<strong>{price(products[2])}</strong></i></span>
              <strong>{rtl ? 'الإجمالي ٤٬٣٩٨ ج.م' : 'Total EGP 4,398'}</strong>
              <span className="phone-add-button">{rtl ? 'إتمام الطلب' : 'Checkout'}</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
