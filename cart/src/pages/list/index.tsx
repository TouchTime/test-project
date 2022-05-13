/*
 * @Description  :
 * @Author       : huyanyan
 * @Date         : 2021-07-19 15:14:25
 */
import React from "react";
import useList from "./list";

const useCustomHookDemo = () => {
  const { list } = useList();

  return (
    <div>
      <h3>自定义list hooks demo</h3>
      {list ? (
        <ol>
          {list.map((item) => (
            <li key={item.id}>
              姓名：{item.name}, 年龄：{item.age}
            </li>
          ))}
        </ol>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default useCustomHookDemo;
