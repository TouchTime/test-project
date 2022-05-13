/*
 * @Description  : 图片的拖拽缩放
 * @Author       : huyanyan
 * @Date         : 2021-07-13 16:07:19
 */
import * as React from "react";
import { useState } from "react";
import "../drage/drage.css";

interface StyleProps {
  width: number;
  height: number;
  x: number;
  y: number;
}

export default () => {
  const [style, setStyle] = useState<StyleProps>({
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  });

  const [isClick, setIsClick] = useState<boolean>(false);

  const draw = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas && canvas.getContext("2d");
    if (canvas) {
      // ctx.clearRect(0, 0, style.width, style.height);
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect(style.x, style.y, 100, 100);
    }
  };
  const handleMouseMove = (event: any) => {
    if (!isClick) {
      return;
    }
    event.preventDefault(); //阻止事件的默认行为(如在浏览器打开文件)
    event.stopPropagation(); // 阻止事件冒泡
    doDraw(event);
  };
  const handleMouseUp = (event: any) => {
    console.log("handleMouseUp", event);
    setIsClick(false);
  };
  const handleMouseDown = (event: any) => {
    setIsClick(true);
    console.log("handleMouseDown", event);
    doDraw(event);
  };
  const doDraw = (event: any) => {
    setStyle({
      ...style,
      x: event.clientX,
      y: event.clientY,
    });
    draw();
  };
  draw();
  return (
    <div className="bg">
      <canvas
        id="canvas"
        className="box"
        width={style.width}
        height={style.height}
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseMove={(event) => handleMouseMove(event)}
        onMouseUp={(event) => handleMouseUp(event)}
      ></canvas>
      <div className="mask"></div>
    </div>
  );
};
