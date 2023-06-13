import React from 'react'
import './Main.css'
import MainProductSpecial from '../MainProductSpecial/MainProductSpecial'
import MainDiscount from '../MainDiscount/MainDiscount'
import MainProductLast from '../MainProductLast/MainProductLast'
import MainProductBoxs from '../MainProductBoxs/MainProductBoxs'
import MainProductSale from '../MainProductSale/MainProductSale'
import MainProductMask from '../MainProductMask/MainProductMask'
import MainWebLog from '../MainWebLog/MainWebLog'
import MainPay from '../MainPay/MainPay'
export default function Main() {
  return (
    <>
    <MainProductSpecial/>
    <MainDiscount/>
    <MainProductLast/>
    <MainProductBoxs/>
    <MainProductSale/>
    <MainProductMask/>
    <MainWebLog/>
    <MainPay/>
    </>
  )
}
