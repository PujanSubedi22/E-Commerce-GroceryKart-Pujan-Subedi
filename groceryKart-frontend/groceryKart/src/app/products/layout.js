import  ProductBanner from '@/components/products/Banner.js'

const ProductLayout = ({children}) => {
  return (
    <div> <ProductBanner/>
        ProductLayout
            {children}
            
    </div>
  )
}

export default ProductLayout