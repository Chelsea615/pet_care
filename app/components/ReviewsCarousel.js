"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    pet: "布丁家长",
    type: "英短猫 · 基础洗护",
    text: "猫咪平时很怕吹风，这次洗完状态很好，毛也蓬松了很多，回家没有躲起来。",
  },
  {
    pet: "年糕家长",
    type: "比熊 · 造型修剪",
    text: "修剪很自然，不会一刀切。店员会提前沟通长度和造型，脸型修得很圆很干净。",
  },
  {
    pet: "摩卡家长",
    type: "柴犬 · 除味护理",
    text: "狗狗洗完没有刺鼻香味，皮肤也没有泛红，换毛期浮毛处理得很彻底。",
  },
  {
    pet: "豆包家长",
    type: "柯基 · 日常洗护",
    text: "第一次到店就会先检查脚底和耳朵，整个过程都有提醒，接狗的时候状态很放松。",
  },
  {
    pet: "可乐家长",
    type: "金毛 · 深层护理",
    text: "大狗洗护很费时间，但店里很有耐心。吹干得很透，身上的毛结也梳开了。",
  },
  {
    pet: "桃桃家长",
    type: "布偶猫 · 低敏洗护",
    text: "家里猫皮肤比较敏感，店员会主动换低刺激用品，洗完两天也没有抓挠。",
  },
  {
    pet: "雪球家长",
    type: "萨摩耶 · 换毛护理",
    text: "白毛洗得很亮，底绒清理得特别细。回家地上掉毛明显少了很多。",
  },
  {
    pet: "栗子家长",
    type: "幼犬 · 适应洗护",
    text: "幼犬第一次洗澡，店员会慢慢安抚，不强迫。结束后还给了下次护理建议。",
  },
];

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToReview = (index) => {
    setActiveIndex((index + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="review-carousel" aria-label="客户评价轮播">
      <div className="review-window">
        <div className="review-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {reviews.map((review) => (
            <article className="card review-card" key={review.pet}>
              <div className="review-topline">
                <div className="stars">★★★★★</div>
                <span>{review.type}</span>
              </div>
              <p>{review.text}</p>
              <strong>{review.pet}</strong>
            </article>
          ))}
        </div>
      </div>
      <div className="review-controls">
        <button type="button" className="review-arrow" aria-label="上一条评价" onClick={() => goToReview(activeIndex - 1)}>
          ‹
        </button>
        <div className="review-dots">
          {reviews.map((review, index) => (
            <button
              type="button"
              key={review.pet}
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`查看${review.pet}的评价`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goToReview(index)}
            />
          ))}
        </div>
        <button type="button" className="review-arrow" aria-label="下一条评价" onClick={() => goToReview(activeIndex + 1)}>
          ›
        </button>
      </div>
    </div>
  );
}
