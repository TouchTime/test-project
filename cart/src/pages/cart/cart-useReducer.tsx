/*
 * @Description  : 购物车
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:08:13
 */
import React, { useState, useEffect, useRef } from "react";
import CartList from "../../components/list";
import { ItemProps, ChoosePProps } from "../../components/listType";
import { CartContext } from "./cartConext";

import "../../assets/main.css";

const Cart = () => {
  /**
   * 列表数据
   */
  let [list, setList] = useState<Array<ItemProps>>([
    {
      name: "西瓜",
      price: 12,
      isChecked: false,
    },
    {
      name: "芒果",
      price: 12,
      isChecked: false,
    },
    {
      name: "哈密瓜",
      price: 12,
      isChecked: false,
    },
  ]);
  /**
   * 总金额
   */
  let [totalPrice, setTotalPrice] = useState(0);
  /**
   * 全选状态 false:未选中  true：选中
   */
  let [checkedAll, setcheckedAll] = useState(false);
  /**
   * 全选事件
   */
  const selectAll = () => {
    checkedAll = !checkedAll;
    setcheckedAll(checkedAll);
    checkAll();
  };
  /**
   * 全选操作
   */
  const checkAll = () => {
    // 金额初始化
    totalPrice = 0;
    // 状态变化
    list.forEach((item) => {
      item.isChecked = checkedAll;
      if (checkedAll) {
        totalPrice += item.price;
      }
    });
    setTotalPrice(totalPrice);
    setList([...list]);
  };

  return (
    <div>
      <CartContext.Provider value={{ setcheckedAll, setList, setTotalPrice }}>
        <CartList checkedAll={checkedAll} list={list} totalPrice={totalPrice} />
      </CartContext.Provider>

      <div className="cart-list">
        <input
          type="checkbox"
          checked={checkedAll}
          onChange={() => selectAll()}
        />
        <span className="cart-name">全选</span>
        <span className="cart-name">总金额： {totalPrice}</span>
        <div className="cart-count">结算</div>
      </div>
    </div>
  );
};

export default Cart;
