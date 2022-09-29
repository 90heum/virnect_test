<!-- <template>
<div class="banner">
<client-only>
    <agile :autoplay-speed="5000"
           :autoplay=true
           :nav-buttons=false>
        <div class="slide"
             v-for="(data, idx) of ['https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png', 
                                        'https://velog.velcdn.com/images/kyj0206/post/01174201-9b39-4b4e-9090-6ebbb4a134d8/image.png']"
             :key="idx">
            <img :src="data"/>
        </div>
    </agile>
</client-only>
</div>    
</template>

<script>
export default {
    updated() {
        if (process.client) {
            // 버튼 위치 지정 자바스크립트
            const buttonTarget = document.querySelectorAll(".banner .agile__dot button");
            const parentButtonTarget = document.querySelector(".agile__dots");
            
            parentButtonTarget.style.position = "absolute";
            parentButtonTarget.style.top = "-2px";
            parentButtonTarget.style.right = "11%";
            buttonTarget.forEach((e, idx) => {
                e.style.width = "15px";
                e.style.height = "15px";
                e.style.margin = "0 5px";
                e.style.borderRadius = "50%";
                e.style.backgroundColor = "#f7f8f9";
            })
        }
    },
    created() {
        if (process.client) {
            
        }
    },
    methods: {
    },
     data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
// .banner 는 사용 안함 테스트용 껍데기
.banner {
    width: 100%;
    position: absolute;
    top: 80%;
    overflow: hidden;
    /* background-color: #000; */

    .bannerWrap {
        position: relative;

        // 실제사용 모듈용 css 구역!!!!!!!!!!!!!!
        .bannerMoule {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 35%);
            padding: 0 30px;
        }
    }
}
.banner > .agile--ssr .agile__actions
  ul li button {
    width: 10px;
    height: 10px;
    margin: 0 8px;
    border-radius: 7px;
    background-color: #f7f8f9;

    
}


:root {
  --shadow: rgba(0, 0, 0, 0.8)
}

.slider-container {
  display: inline-flex;
  overflow: hidden;
  scrollbar-width: none;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-out;
  cursor: grab;
}

.slide{
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
   img { max-height: 230px; }
}

@media(min-width: 1200px){
}

.slide img{
  max-width: 100%;
  width: 80%;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 50px -1px var(--shadow);
  border-radius: 4px;
  user-select: none;
}

.grabbing {
  cursor: grabbing;
}

.grabbing .slide img{
  transform: scale(0.9);
  box-shadow: 5px 5px 40px -1px var(--shadow);
}

@media screen and (min-width: 1104px) and (max-width: 1115px) {
   .banner {  top: 85%; }
}
@media screen and (max-width: 1103px) {
    .banner {  top: 93%; }
}
@media screen and (max-width: 1076px) {
    .banner {  top: 98%; }
}
@media screen and (max-width: 1024px) {
    .banner {  top: 147%; }
}
@media screen and(max-width:768px) {
    .banner {  top: 133%; }
    .banner .bannerWrap .bannerMoule .banner1024{
        display: none;
    }

    .banner .bannerWrap .bannerMoule .banner768{
        display: block;
    }

    .banner .bannerWrap .bannerMoule{
        padding: 0 24px;
        transform: translate(-50%, 60%);
    }
}
@media screen and (max-width: 745px) {
    .banner {  top: 129%; }
}
@media screen and (max-width: 665px) {
    .banner {  top: 126%; }
}
@media screen and (max-width: 617px) {
    .banner {  top: 120%; }
}
@media screen and (max-width: 550px) {
    .banner {  top: 112%; }
}
</style> -->