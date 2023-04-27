this.$nextTick(() => {
    // 3.深度监视watch监视homecasual是否完全加载，是的话在创建swiper实例
  new Swiper('.swiper-container', {
    autoplay: true,//自动轮播
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })
});
}