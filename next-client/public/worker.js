console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  console.log(e);
  const data = e.data.json();
  console.log(data);
  let title = "Push Test";
  console.log("Push Recieved...");
  self.registration.showNotification(title, {
    body: "Notified by Web Push Service!",
    icon: "/favicon.ico",
  });
});

self.addEventListener("notificationclick", (e) => {
  var notification = e.notification;
  var action = e.action;

  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow("http://www.google.com");
    notification.close();
  }
});
