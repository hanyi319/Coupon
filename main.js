// 卡券信息表
const mockCouponsMap = [
  {
    id: "kfc",
    title: "疯狂星期四，V我50~",
    brand: "肯德基",
    desc: "满99减50",
    overview: "说出暗号\n「异世相遇，尽享美味！」\n会有神秘惊喜",
    character1: "Diluc",
    character2: "Noelle",
    expires: "有效期至 2021年3月21日",
  },
  {
    id: "mcdonalds",
    title: "这个仇，我记下了！",
    brand: "必胜客",
    desc: "可兑换猫尾特调一杯",
    overview: "说出暗号\n「风起必胜，应约而来！」\n会有神秘惊喜",
    character1: "Amber",
    character2: "Yula",
    expires: "有效期至 2022年9月17日",
  },
  {
    id: "starbucks",
    title: "托马，再来一杯！",
    brand: "喜茶",
    desc: "任意饮品可免费再续一杯",
    overview: "各位旅行者，\n活动即将开启，敬请期待！",
    character1: "Ayaka",
    character2: "Ayato",
    expires: "有效期 未知",
  },
];
const coupons = document.querySelector(".coupons");
const couponList = document.querySelector("#coupon-list");
const detailPage = document.querySelector("#detail-page");
const closeBack = document.querySelector(".close-back");

// 获取卡券详细信息
const getCouponDetail = function (id) {
  return mockCouponsMap.find((item) => item.id === id) || {};
};

// 卡券详情动态赋值
const setCouponData = function (data) {
  document.querySelector(".coupon-detail .title").innerText = data.title;
  document.querySelector(".coupon-detail .main i").className = `logo ${data.id}`;
  document.querySelector(".coupon-detail .brand").innerText = data.brand;
  document.querySelector(".coupon-detail .desc").innerText = data.desc;
  document.querySelector(".coupon-detail .overview").innerText = data.overview;
  document.querySelector(".coupon-detail .contentWrapper i").className = `logo ${data.character1}`;
  document.querySelector(".coupon-detail .share .sub-text").innerText = data.expires;
};

coupons.addEventListener("click", function (event) {
  const targetEl = event.target.closest(".coupon-item");
  const id = targetEl.dataset.id;
  const couponDetail = getCouponDetail(id);

  setCouponData(couponDetail);

  // 显示操作
  couponList.classList.remove("show-from-left");
  couponList.classList.add("hide-to-left");
  detailPage.classList.add("show-from-right");
  detailPage.classList.remove("hide-to-right");
  couponList.addEventListener("animationend", function () {
    document.querySelector("#close-back").style.display = "flex";
  });
});

// 关闭操作
closeBack.addEventListener("click", function () {
  detailPage.classList.remove("show-from-right");
  detailPage.classList.add("hide-to-right");
  couponList.classList.remove("hide-to-left");
  couponList.classList.add("show-from-left");
  couponList.addEventListener("animationend", function () {
    document.querySelector("#close-back").style.display = "none";
  });
});
