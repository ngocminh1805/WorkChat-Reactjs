import * as React from "react";
import image from "../../assets/image.jpg";
import ChatItem from "./chatItem";
import "./chatList.css";

type chatItem = {
  userImage: any;
  userName: string;
  message: string;
  time: Date;
  isSeen: boolean;
  isOnline: boolean;
  isGroup?: boolean | false;
};

class ChatList extends React.PureComponent {
  chatlist: chatItem[] = [
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: false,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
    {
      userName: "Ngọc Minh",
      userImage: image,
      message: "danh sách các lỗi cần fix",
      isOnline: true,
      isSeen: true,
      time: new Date(),
    },
  ];

  listitem = this.chatlist.map((item) => (
    <li>
      <ChatItem
        isOnline={item.isOnline}
        isSeen={item.isSeen}
        time={item.time}
        userName={item.userName}
        userImage={item.userImage}
        message={item.message}
      />
    </li>
  ));

  render() {
    return (
      <div className="chatlist-container">
        <ul>{this.listitem}</ul>
      </div>
    );
  }
}

export default ChatList;
