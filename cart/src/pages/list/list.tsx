/*
 * @Description  :自定义hooks
 * @Author       : huyanyan
 * @Date         : 2021-07-19 15:02:39
 */
import React, { useEffect, useState } from "react";

const useList = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    req("/list")
      .then((res) => {
        setList(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return {
    list,
    setList,
  };
};

function req() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          code: 200,
          data: [
            { id: 1, age: 20, name: "张三" },
            { id: 2, age: 21, name: "李四" },
            { id: 3, age: 22, name: "王五" },
            { id: 4, age: 23, name: "赵六" },
            { id: 5, age: 24, name: "周七" },
          ],
        }),
      2000
    );
  });
}

export default useList;
