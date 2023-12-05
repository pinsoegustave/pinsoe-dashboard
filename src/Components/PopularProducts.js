import React from 'react'
import RecentOrders from './RecentOrders'
import { Link } from 'react-router-dom'

const popularProductData = [
    {
        id: '4334',
        product_name: 'Macbook M1 Pro 34',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$133.08',
        product_stock: 341
    },
    {
        id: '4334',
        product_name: 'Galaxy Samsung Buds 2 ',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$453.08',
        product_stock: 0
    },
    {
        id: '4334',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '7823.08',
        product_stock: 12
    },
    {
        id: '4334',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$2300.08',
        product_stock: 98
    },
    {
        id: '4334',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$269.08',
        product_stock: 0
    },
    {
        id: '4334',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$490.08',
        product_stock: 41
    }
]
const PopularProducts = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]">
            <strong className="text-gray-700 font-medium">Popular Products</strong>
            <div className="mt-4 flex flex-col gap-3">
                {popularProductData.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="flex hover:no-underline">
                        <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={product.product_thumbnail}
                                alt={product.product_name}
                            />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-sm text-gray-800">{product.product_name}</p>
                          <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                            {product.product_stock === 0 ? 'Out of stock' : product.product_stock + 'in stock'}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 pl-2">{product.product_price}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularProducts
