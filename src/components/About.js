import React from "react";
import { useParams } from "react-router-dom";

/**
 * useParams를 사용하면 URL 파라미터로 넘어온 항목을 사용.
 * App.js에서 About 컴포넌트의 path '/about/:name/'에서
 * name이 URL파라미터.
 * useParams가 반환하는 파라미터 객채를 통해 접근
 */

export default function About() {
  /**
   * console에는 params의 name이 있다.
   * 단 처음 아무것도 없는 상태에서 접근한다면 아무것도 안나옴.
   */

  const params = useParams();
  console.log(params);

  return (
    <div>
      {params.name && <h2>redux todolist</h2>}
      <ul>
        <li>라우터 적용해보기</li>
        <li>라우터 확실히 알기</li>
        <li>라우터 끝장내기</li>
      </ul>
    </div>
  );
}
