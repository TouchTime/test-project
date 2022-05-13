/*
 * @Description  : 全选
 * @Author       : huyanyan
 * @Date         : 2021-07-09 15:37:21
 */
import { useState, useEffect } from "react";
import { IpProps, ItemProps, ChoosePProps } from "./listType";

const useChooseAll = (props: any) => {
  let [totalPrice, setTotalPrice] = useState(props.totalPrice);
  let [checkedAll, setcheckedAll] = useState(props.checkedAll);
  let [list, setList] = useState(props.list);

  /**
   * 全选操作
   */
  const checkAll = () => {
    // 金额初始化
    totalPrice = 0;
    // 状态变化
    list.forEach((item: ItemProps) => {
      item.isChecked = checkedAll;
      if (checkedAll) {
        totalPrice += item.price;
      }
    });
    setTotalPrice(totalPrice);
    setList([...list]);
  };

  checkedAll = !checkedAll;
  setcheckedAll(checkedAll);
  checkAll();
};

export default useChooseAll;
