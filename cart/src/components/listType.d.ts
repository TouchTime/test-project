/*
 * @Description  : ts定义
 * @Author       : huyanyan
 * @Date         : 2021-07-06 16:00:41
 */
export interface ItemProps {
  name: string;
  isChecked: boolean;
  price: number;
}


export interface IpProps {
  list: Array<ItemProps>;
  checkedAll: boolean
  totalPrice: number
}

export interface ChoosePProps {
  target: {
     checked: boolean 
  } 
}

export interface RdeuceProps {
  list:Array<ItemProps>;
  type?:string
  totalPrice: number
  checkedAll: boolean

}
