export async function getCommentList() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        name: "케이",
        date: new Date().toDateString(),
        target: "bride",
        comment:
          "단어를 순서(어순)에 맞게 배열하여 생각이나 감정을 표현하는 말이나 글 따위를 일컫는다. 고유어로는 '월'이라고 한다. 영어로는 sentence.",
      },
      {
        id: 2,
        name: "제우스",
        date: new Date().toDateString(),
        target: "groom",
        comment:
          "단어를 순서(어순)에 맞게 배열하여 생각이나 감정을 표현하는 말이나 글 따위를 일컫는다. 고유어로는 '월'이라고 한다. 영어로는 sentence.",
      },
    ]);
  }, 500);
}
