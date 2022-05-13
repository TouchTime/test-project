/*
 * @Description  : 颜色提取器
 * @Author       : huyanyan
 * @Date         : 2021-07-13 16:07:19
 */
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Color from "@/assets/images/color.png";

interface StyleProps {
  width: number;
  height: number;
  left: number;
  top: number;
  oLeft: number;
  oTop: number;
}

export default () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas && canvas.getContext("2d");
  const img = new Image();
  const [style, setStyle] = useState<StyleProps>({
    width: 100,
    height: 100,
    left: 0,
    top: 0,
    oLeft: 0,
    oTop: 0,
  });

  const isClickRef = useRef(false);
  const [color, setColor] = useState<string>("#fff");

  // const [isClick, setIsClick] = useState<boolean>(false);

  const init = () => {
    if (canvas) {
      img.onload = function () {
        draw();
      };
      img.src =
        "https://static.zhihu.com/liukanshan/images/comics/bg-89c9bdc3.jpg";
    }
  };
  const clickCanvas = (event: any) => {
    console.log(event);
    setStyle({
      ...style,
      left: style.left,
      top: style.top,
    });

    let myImageData = ctx.getImageData(
      style.left,
      style.top,
      style.width,
      style.height
    );
    console.log(myImageData);
    let data = myImageData.data;
    let colors = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
    setColor(colors);
    console.log(colors);
  };
  const handleMouseMove = (event: any) => {
    if (!isClickRef.current) {
      return;
    }
    event.preventDefault(); //阻止事件的默认行为(如在浏览器打开文件)
    event.stopPropagation(); // 阻止事件冒泡
    doDraw(event);
  };
  const handleMouseUp = (event: any) => {
    isClickRef.current = false;
    console.log("handleMouseUp", event, isClickRef);
    doDraw(isClickRef);
  };
  const handleMouseDown = (event: any) => {
    isClickRef.current = true;

    console.log("handleMouseDown", event, isClickRef);
    // doDraw(event);
  };

  /**
   * 放大缩小事件
   */

  const handleMouseWheel = (event: any) => {};

  const doDraw = (event: any) => {
    setStyle({
      ...style,
      left: style.oLeft,
      top: style.oTop,
      oLeft: event.clientX,
      oTop: event.clientY,
    });
    draw();
  };

  const draw = () => {
    ctx.clearRect(0, 0, style.width, style.height);
    ctx.drawImage(
      img,
      0,
      0,
      style.width,
      style.height
      // style.oLeft,
      // style.oTop
    );
  };

  init();

  return (
    <div>
      <canvas
        id="canvas"
        width={style.width}
        height={style.height}
        // onClick={(event) => clickCanvas(event)}
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseMove={(event) => handleMouseMove(event)}
        onMouseUp={(event) => handleMouseUp(event)}
        onMouseWheel={(event) => handleMouseWheel(event)}
      ></canvas>
      {/* <div
        style={{
          background: color,
          width: "200px",
          height: "200px",
          border: `1px sold ${color}`,
        }}
      ></div> */}
    </div>
  );
};
