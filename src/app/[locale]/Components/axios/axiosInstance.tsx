import axios from "axios";
import router from "next/router"; 

const axiosInstance = axios.create({
  baseURL: "http://46.202.135.90:81/en/api",
});

// ✅ أضف التوكن تلقائياً في كل طلب
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ التعامل مع التوكن المنتهي وتجديده تلقائياً
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const res = await axios.post(
          "http://46.202.135.90:81/en/api/token/refresh/",
          { refresh: refreshToken }
        );

        const newAccessToken = res.data.access;

        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = "Bearer " + newAccessToken;

        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
         router.push("/login"); 
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
