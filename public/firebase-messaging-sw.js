



// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBgrvali7O7aNZazdai_Gh1nBIcc2FCp6Y",
    authDomain: "test-d30ea.firebaseapp.com",
    projectId: "test-d30ea",
    storageBucket: "test-d30ea.firebasestorage.app",
    messagingSenderId: "636987858623",
    appId: "1:636987858623:web:a71f77a5e79ef2d4d4f00a",
    measurementId: "G-8MTVH1VKWY"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();



// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function (payload) {
    console.log('pesan diterima');
    // // Customize notification here
    // const notificationTitle = payload.notification.title || 'New Message!';
    // const notificationBody = payload.notification.message || 'You have a new message.';
    // const notificationOptions = {
    //     body: notificationBody,
    //     icon: '/my-app-icon.png',
    //     sound: 'notification.wav',
    //     click_action: '/messages' // Open the messages page on click
    // };

    // self.registration.showNotification(notificationTitle,
    //     notificationOptions);
});
