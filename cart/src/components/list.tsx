/*
 * @Description  : 购物车列表
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:25:26
 */
import * as React from "react";
import { useState, useEffect, useContext, useRef, useMemo } from "react";
import { IpProps, ItemProps, ChoosePProps } from "./listType";
import { CartContext } from "../pages/cart/cartConext";

const CartList = ({ checkedAll, list, totalPrice }: IpProps) => {
  /**
   * 共享数据
   */
  let { setcheckedAll, setList, setTotalPrice } = useContext(CartContext);
  const [style, setStyle] = useState({
    width: 0,
    height: 0,
    clientX: 0,
    clientY: 0,
    left: 0,
    top: -44,
    isStop: true,
  });
  /**
   * 复选框勾选事件
   */
  const chooseItem = (item: ItemProps, index: number) => {
    handleCheck(item, index);
  };

  const handleMouseDown = (event: any) => {
    event.preventDefault(); //阻止事件的默认行为(如在浏览器打开文件)
    event.stopPropagation(); // 阻止事件冒泡
    console.log("handleMouseDown", event);
    let styleItem = {
      ...style,
      clientX: event.clientX,
      clientY: event.clientY,
      left: event.clientX,
      top: event.clientY - 44,
      isStop: false,
    };

    setStyle(styleItem);
  };
  const handleMouseMove = (event: any) => {
    event.preventDefault(); //阻止事件的默认行为(如在浏览器打开文件)
    event.stopPropagation(); // 阻止事件冒泡
    if (style.isStop) {
      return;
    }

    let styleItem = {
      ...style,
      width: Math.abs(Number(event.clientX) - Number(style.left)),
      height: Math.abs(Number(event.clientY) - Number(style.top)),
      clientX: event.clientX,
      clientY: event.clientY,
    };
    setStyle(styleItem);
    let id = event.target.dataset.id && Number(event.target.dataset.key);
    console.log(id);
    if (list && list[id].isChecked) {
      handleCheck(list[id], id);
    }
  };
  const handleMouseUp = (event: any) => {
    console.log("handleMouseUp", event);
    startClick(event);
  };
  const handleMouseOut = (event: any) => {
    console.log("handleMouseOut", event);
    // startClick(event);
  };

  const startClick = (event: any) => {
    event.preventDefault(); //阻止事件的默认行为(如在浏览器打开文件)
    event.stopPropagation(); // 阻止事件冒泡
    if (style.isStop) {
      return;
    }
    let styleItem = {
      ...style,
      width: Math.abs(Number(event.clientX) - Number(style.left)),
      height: Math.abs(Number(event.clientY) - Number(style.top)),
      clientX: event.clientX,
      clientY: event.clientY,
      isStop: true,
    };
    setStyle(styleItem);
  };

  // 勾选事件
  const handleCheck = (item: ItemProps, index: number) => {
    if (!list) {
      return;
    }
    item.isChecked = !item.isChecked;
    // 单个状态处理
    list[index] = item;
    setList([...list]);
    // 遍历整个状态
    let count = 0;
    totalPrice = 0;
    list.forEach((item) => {
      if (item.isChecked) {
        totalPrice += item.price;
        count++;
      }
    });
    setTotalPrice(totalPrice);
    setcheckedAll(count === list.length);
  };
  return (
    <div
      onMouseDown={(event) => handleMouseDown(event)}
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseUp={(event) => handleMouseUp(event)}
      onMouseOut={(event) => handleMouseOut(event)}
    >
      {list &&
        list.map((item: ItemProps, index: number) => {
          return (
            <div
              className="cart-list"
              key={index}
              data-key={index}
              data-id={item}
              // onClick={(event) => startClick(item, event)}
            >
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => chooseItem(item, index)}
              />
              <span className="cart-name">{item.name}</span>
              <span className="cart-price">{item.price}</span>
            </div>
          );
        })}
      <div
        className="box"
        style={{
          width: style.width + "px",
          height: style.height + "px",
          left: style.left + "px",
          top: style.top + "px",
        }}
      ></div>
    </div>
  );
};

export default CartList;
