// Firebase Configuration for Omar Telecom (عمر للاتصالات) - CDN Version
// إعدادات Firebase لمشروع عمر للاتصالات - نسخة CDN
// إذا لم يتصل التطبيق: افتح Firebase Console → مشروع omar-telecom-682ac → Firestore Database → أنشئ قاعدة البيانات إن لم تكن موجودة

const firebaseConfig = {
  apiKey: "AIzaSyAjLgTfb2TJuQ5EIyls5v1GNX21LcaZVb4",
  authDomain: "omar-telecom-682ac.firebaseapp.com",
  projectId: "omar-telecom-682ac",
  storageBucket: "omar-telecom-682ac.firebasestorage.app",
  messagingSenderId: "357723312982",
  appId: "1:357723312982:web:a7fbe2c0e1f55f545ffcf7",
  measurementId: "G-FK23TTC0TG"
};

// تهيئة Firebase باستخدام CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getFirestore, collection, getDocs, query, limit } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js';

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// التحقق من أن التطبيق مرتبط بمشروع Omar telecom فقط (حماية من تغيير الإعداد بالخطأ)
const EXPECTED_PROJECT_ID = 'omar-telecom-682ac';
if (app.options?.projectId !== EXPECTED_PROJECT_ID) {
  console.warn(
    '⚠️ Firebase projectId غير متوقع. المتوقع:',
    EXPECTED_PROJECT_ID,
    '، الحالي:',
    app.options?.projectId
  );
}

// تهيئة الخدمات
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// تصدير الخدمات للاستخدام في الملفات الأخرى
window.firebaseDB = db;
window.firebaseAuth = auth;
window.firebaseAnalytics = analytics;

console.log('🔥 Firebase initialized successfully!');
console.log('📊 Firestore Database:', db);
console.log('🔐 Authentication:', auth);
console.log('📈 Analytics:', analytics);
console.log('📌 المشروع:', firebaseConfig.projectId, '(Omar telecom)');

// فحص الاتصال بقاعدة Firestore (مشروع omar-telecom-682ac)
(async function checkFirestoreConnection() {
  try {
    const testRef = collection(db, 'phones');
    const q = query(testRef, limit(1));
    await getDocs(q);
    console.log('✅ Firestore متصل بنجاح بمشروع', firebaseConfig.projectId);
  } catch (err) {
    console.error('❌ فشل الاتصال بـ Firestore:', err.message || err);
    console.warn('💡 تأكد من: 1) تفعيل Firestore في Firebase Console 2) قواعد الأمان تسمح بالقراءة');
  }
})();
