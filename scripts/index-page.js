const commentList = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/08/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day. ",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
const commentSection = document.querySelector(".comment-section");

const conversationTitle = document.createElement("h1");
conversationTitle.classList.add("conversation_header");
conversationTitle.innerText = "Join the Conversation";
commentSection.appendChild(conversationTitle);

const form = document.createElement("form");
form.classList.add("form__container");
form.setAttribute("name", "bioForm");
commentSection.appendChild(form);

const formBox = document.createElement("div");
formBox.classList.add("box__comment");
form.appendChild(formBox);

const imgBox = document.createElement("div");
imgBox.classList.add("box__comment-img");
formBox.appendChild(imgBox);

const newUserImage = document.createElement("img");
newUserImage.classList.add("new__user_image");
imgBox.appendChild(newUserImage).src = "assets/Images/Mohan-muruge.jpg";

const inputBox = document.createElement("div");
inputBox.classList.add("box__comment-input");
formBox.appendChild(inputBox);

const labelName = document.createElement("label");
labelName.classList.add("label__name");
labelName.setAttribute("for", "name");
labelName.innerText = "NAME";
inputBox.appendChild(labelName);

const inputName = document.createElement("input");
inputName.classList.add("input__name");
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Enter your name");
inputName.setAttribute("id", "name");
inputName.setAttribute("nam", "userName");
inputName.attributes.required = "required";
inputBox.appendChild(inputName);

const commentThread = document.createElement("div");
commentThread.classList.add("thread__comment");
commentSection.appendChild(commentThread);

const labelTextArea = document.createElement("label");
labelTextArea.classList.add("label__textArea");
labelTextArea.setAttribute("for", "comment");
labelTextArea.innerText = "COMMENT";
inputBox.appendChild(labelTextArea);

const textArea = document.createElement("textarea");
textArea.classList.add("text_area__comment");
textArea.setAttribute("for", "comment");
textArea.setAttribute("placeholder", "Add a new comment");
textArea.setAttribute("id", "comment");
textArea.setAttribute("id", "comment");
textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "30");
inputBox.appendChild(textArea);

const buttonBox = document.createElement("div");
buttonBox.classList.add("button__comment");
inputBox.appendChild(buttonBox);

const button = document.createElement("button");
button.classList.add("comment__button");
button.addEventListener("click", addComment);
buttonBox.appendChild(button);
button.innerText = "COMMENT";

for (let j = 0; j < commentList.length; j++) {
  const commentListItem = document.createElement("div");
  commentListItem.classList.add("comment_list__item");
  commentThread.appendChild(commentListItem);

  const updatedComment = document.createElement("div");
  updatedComment.classList.add("updated__img");
  commentListItem.appendChild(updatedComment);

  const userImage = document.createElement("img");
  userImage.classList.add("comment__user_image--2");
  updatedComment.appendChild(userImage);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper__comment");
  commentListItem.appendChild(wrapper);

  const nameDate = document.createElement("div");
  nameDate.classList.add("name-date__comment");
  wrapper.appendChild(nameDate);

  const commentName = document.createElement("p");
  commentName.classList.add("comment__name");
  commentName.innerText = commentList[j].name;
  nameDate.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.classList.add("comment__date");
  commentDate.innerText = commentList[j].date;
  nameDate.appendChild(commentDate);

  const commentWrapper = document.createElement("div");
  commentWrapper.classList.add("wrapper--one__comment");
  wrapper.appendChild(commentWrapper);

  const commentPost = document.createElement("p");
  commentPost.classList.add("comment__post");
  commentPost.innerText = commentList[j].comment;
  commentWrapper.appendChild(commentPost);
}

function addComment(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");

  const userName = nameInput.value;
  const userComment = commentInput.value;

  nameInput.value = "";
  commentInput.value = "";

  const newComment = {
    name: userName,
    date: getCurrentDate(),
    comment: userComment,
  };

  if (userComment.trim() === "" || userName.trim() === "") {
    nameInput.style.outline = "1px solid red";
    commentInput.style.outline = "1px solid red";
    alert("You cannot leave the boxes empty!")
    return;
  }

  nameInput.style.outline = "";
  commentInput.style.outline = "";

  commentList.unshift(newComment);

  const commentListItem = document.createElement("div");
  commentListItem.classList.add("comment_list__item");
  commentThread.insertBefore(commentListItem, commentThread.firstChild);

  const updatedComment = document.createElement("div");
  updatedComment.classList.add("updated__img");
  commentListItem.appendChild(updatedComment);

  const userImage = document.createElement("img");
  userImage.classList.add("comment__user_image");
  updatedComment.appendChild(userImage).src = "assets/Images/Mohan-muruge.jpg";

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper__comment");
  commentListItem.appendChild(wrapper);

  const nameDate = document.createElement("div");
  nameDate.classList.add("name-date__comment");
  wrapper.appendChild(nameDate);

  const commentName = document.createElement("p");
  commentName.classList.add("comment__name");
  commentName.innerText = newComment.name;
  nameDate.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.classList.add("comment__date");
  commentDate.innerText = newComment.date;
  nameDate.appendChild(commentDate);

  const commentWrapper = document.createElement("div");
  commentWrapper.classList.add("wrapper--one__comment");
  wrapper.appendChild(commentWrapper);

  const commentPost = document.createElement("p");
  commentPost.classList.add("comment__post");
  commentPost.innerText = newComment.comment;
  commentWrapper.appendChild(commentPost);
}

function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  return `${month}/${day}/${year}`;
}
