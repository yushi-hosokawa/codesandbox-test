import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し，初期化する．
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //完了したTODOに新しいdiv要素の追加
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    completeDiv.classname = "complete-todo";

    //完了したTODOに新しいリスト要素の追加
    const completeLi = document.createElement("li");
    completeLi.innerText = li.innerText;

    //完了したTODOに戻すボタンの追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //完了リストされたリストのボタンの文字列を取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //新しいdivに要素を追加
    completeDiv.appendChild(completeLi);
    completeDiv.appendChild(backButton);
    console.log(completeDiv);

    //completeListに作成したdivを追加
    document.getElementById("complete-list").appendChild(completeDiv);

    //追加した要素を未完了リストから削除
    const deleteTarget = completeButton.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
