import React from 'react'
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoIosCube } from 'react-icons/io';
import { useTranslations } from 'use-intl';
import "./RecentOrders2.css"

function RecentOrders2() {
  const t = useTranslations('HomePage');
  return (
    <div className='RecentOrders2'>
      <div className='boxsRecentOrders2'>
      <div className="BoxRecentOrders2" style={{background:"#A155B933"}}>
                <div className="container-box">
                  <div className="name-box">
                    <h1>{t("CancelledReturnedOrders")}</h1>
                    <p>10%</p>
                  </div>
                  <div className="icon">
                    <div style={{background:"#574b30"}}>
                      <IoIosCube style={{color:"#FEC53D"}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="BoxRecentOrders2" style={{background:"#F765A333"}}>
                <div className="container-box">
                  <div className="name-box">
                    <h1>{t("Cart")}</h1>
                    <p>$80,000</p>
                  </div>
                  <div className="icon">
                    <div style={{background:"#574b30"}}>
                      <IoIosCube style={{color:"#FEC53D"}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="BoxRecentOrders2" style={{background:"#7987FF33"}}>
                <div className="container-box">
                  <div className="name-box">
                    <h1>{t("OrderTime")}</h1>
                    <p>-----</p>
                  </div>
                  <div className="icon">
                    <div style={{background:"#6a493e"}}>
                      <FaClockRotateLeft style={{color:"#FF9066"}} />
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div className="boxs2RecentOrders2">
        <div className="box2" style={{borderColor : "#F765A366"}}>
          <h1>{t("tax")}</h1>
          <p>number</p>
        </div>
        <div className="box2" style={{borderColor : "#7987FF66"}}>
          <h1>{t("DeliveryTax")}</h1>
          <p>number</p>
        </div>
        <div className="box2" style={{borderColor : "#C2C5DD66"}}>
          <h1>{t("Shipping")}</h1>
          <p>number</p>
        </div>
      </div>
    </div>
  )
}

export default RecentOrders2