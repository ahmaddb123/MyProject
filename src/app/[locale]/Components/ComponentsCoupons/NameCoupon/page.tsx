import React from "react";
import "./NameCoupon.css";

function NameCoupon() {
  return (
    <div className="NameCoupon1" >
      <div className="btns">
        <button>تحديد مدة زمنية</button>
        <button>الشهر الحالي</button>
        <button>أمس</button>
        <button>اليوم</button>
        <button>كل الفترة</button>
      </div>
      <div className="NameCoupon">
        <div className="coupon-name">
          <h1>اسم الكوبون</h1>
        </div>
        <div className="section">
          <h2>كل الطلبات الناجحة</h2>
          <div>
            <span>1,101,25</span>
            <p>اجمالي المبيعات شامل الضريبة</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>اجمالي قيمة المبيعات غير شاملة للضريبة</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>اجمالي التخفيضات</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>صافي المبيعات</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>عدد الطلبات</p>
          </div>
        </div>
        <div className="section">
          <h2>الطلبات المكتملة فقط</h2>
          <div>
            <span>1,101,25</span>
            <p>اجمالي المبيعات شامل الضريبة</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>اجمالي قيمة المبيعات غير شاملة للضريبة</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>اجمالي التخفيضات</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>صافي المبيعات</p>
          </div>
          <div>
            <span>1,101,25</span>
            <p>عدد الطلبات</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameCoupon;
