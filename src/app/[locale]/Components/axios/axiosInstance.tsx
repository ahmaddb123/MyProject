import axios from "axios";

// إنشاء نسخة من axios
const axiosInstance = axios.create({
  baseURL: "http://46.202.135.90:81/en/api", // عدّل إذا احتجت
});

// Interceptor للردود
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // إذا كان الخطأ 401 ولم تتم إعادة المحاولة بعد
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const res = await axios.post(
          "http://46.202.135.90:81/en/api/token/refresh/",
          { refresh: refreshToken }
        );

        const newAccessToken = res.data.access;

        // تحديث التوكن
        localStorage.setItem("accessToken", newAccessToken);

        // تعديل الهيدر بالوصول الجديد
        originalRequest.headers.Authorization = "Bearer " + newAccessToken;

        // إعادة تنفيذ الطلب الأصلي
        return axiosInstance(originalRequest);
      } catch (err) {
        // فشل التحديث، إحذف التوكنات
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return Promise.reject(err);
      }
    }

    // إذا ما كان 401 أو فشل التحديث
    return Promise.reject(error);
  }
);

// تصدير النسخة
export default axiosInstance;
