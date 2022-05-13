/*
 * @Description  : 轮播图
 * @Author       : huyanyan
 * @Date         : 2021-09-01
 */
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Color from "@/assets/images/color.png";
import Red from "@/assets/images/red.png";
import "./swiper.css";

interface imgUrlType {
  name: string;
  url: string;
}

export default () => {
  const [imgUrlList, setImgUrlList] = useState<Array<imgUrlType>>([
    { name: "一", url: Color },
    { name: "二", url: Red },
  ]);

  // const imgUrlList: Array<imgUrlType> = [
  //   { name: "一", url: Color },
  //   { name: "二", url: Red },
  // ];
  return (
    <div className="swiper">
      <div className="swiper-auto">
        {imgUrlList &&
          imgUrlList.map((item: imgUrlType, index: number) => {
            return (
              <img className="swiper-item" src={item.url} key={index}></img>
            );
          })}
      </div>
    </div>
  );
};
