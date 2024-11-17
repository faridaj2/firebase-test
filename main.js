// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgrvali7O7aNZazdai_Gh1nBIcc2FCp6Y",
  authDomain: "test-d30ea.firebaseapp.com",
  projectId: "test-d30ea",
  storageBucket: "test-d30ea.firebasestorage.app",
  messagingSenderId: "636987858623",
  appId: "1:636987858623:web:a71f77a5e79ef2d4d4f00a",
  measurementId: "G-8MTVH1VKWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Function to request permission for notifications
function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // After permission is granted, retrieve the token
      getToken(messaging, { vapidKey: 'BKR3M4vyA_kUFwmdErwwQb7Xg360bwmp8JendZkeF7oOMdv1tKH1Ce7f53y3rDqTuLQbrztMTmEfdMac67A_uo8' })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token: ', currentToken);
            document.getElementById("app").innerHTML = currentToken;
            // Send the token to your server or use it in your app
          } else {
            console.log('No registration token available.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token: ', err);
        });
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
}

messaging.onMessage(function (payload) {
  console.log("Pesan diterima:", payload);
  // Tampilkan pesan di UI
  // Atau jalankan tindakan lain berdasarkan payload pesan
  alert('Pesan diterima')
});

// Request permission on page load
requestPermission();


