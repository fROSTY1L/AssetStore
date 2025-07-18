import { Flex } from 'antd'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <Flex vertical>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Flex>
  )
}

export default ProductList
