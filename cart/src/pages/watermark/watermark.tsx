/*
 * @Description  : 水印
 * @Author       : huyanyan
 * @Date         : 2021-12-28
 */
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "./watermark.css";

interface ImgProps {
  img: string;
  name: string;
}

export default () => {
  const imgList: Array<ImgProps> = [
    {
      img: "https://static.zhihu.com/liukanshan/images/comics/bg-89c9bdc3.jpg",
      name: "图片1",
    },
    {
      img: "https://static.zhihu.com/liukanshan/images/comics/bg-89c9bdc3.jpg",
      name: "图片2",
    },
  ];
  /**
   * @param {*} dom
   * @param {String} txt
   */
  const watermark = (dom: any, txt: any, str: any) => {
    if (!dom) return false;
    let length = txt.length * 20; // 根据内容生成画布大小，20代表比例
    let canvas = document.createElement("canvas");
    canvas.width = canvas.height = length;
    canvas.style.display = "none";
    document.body.appendChild(canvas);
    let context = canvas.getContext("2d");
    context.font =
      '12px "PingFangSC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
    context.fillStyle = "red";
    context.rotate((-15 * Math.PI) / 180); // 画布里面文字的旋转角度
    context.fillText(str, length / 2, length); // 文字的位置
    dom.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;
  };

  useEffect(() => {
    watermark(document.getElementsByClassName("watermark"), "1212121", "水印");
  }, []);
  return (
    <div className="watermark">
      {imgList &&
        imgList.length > 0 &&
        imgList.map((item: ImgProps, index: number) => {
          return (
            <div className="show-list" key={index}>
              <img src={item.img} className="img-list"></img>
            </div>
          );
        })}
    </div>
  );
};
