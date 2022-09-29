<template>
  <div v-if="$i18n.localeProperties.code === 'ko'">
    <span>
        <h2>버넥트 본사</h2>
        <p>서울시 용산구 한강대로 7길 10-15 (우편번호 : 04379)</p>
        <!-- //NOTE - 지도삽입 구역  -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.0705509455132!2d126.96180943534662!3d37.52484444062127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1f86695c8c3%3A0x9eabd8fa47962deb!2z7ISc7Jq47Yq567OE7IucIOyaqeyCsOq1rCDtlZzqsJXrjIDroZw36ri4IDEwLTE1!5e0!3m2!1sko!2skr!4v1656558007181!5m2!1sko!2skr" width="100%" height="560" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h2{
        font-size: 44px;
        font-weight: bold;
        line-height: 1.4;
        letter-spacing: -0.55px;
        text-align: left;
        color: #121212;
        margin-bottom: 15px;
    }
    p{
        font-size: 16px;
        font-weight: 500;
        line-height: 1.75;
        letter-spacing: normal;
        text-align: left;
        color: #121212;
        margin-bottom: 50px;
    }
</style>