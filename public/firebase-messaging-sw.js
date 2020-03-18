// 서비스워커에 Firebase 라이브러리 불러오기.
importScripts("https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js"
);

// Firebase 클라우드 메시징 발신자 ID.
// 프로젝트 생성 -> 설정(톱니바퀴) -> 클라우드 메시징 텝에 있는 값.
firebase.initializeApp({
  messagingSenderId: "188505041022"
});

// 백그라운드 메시지 수신
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.icon
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
