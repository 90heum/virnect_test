<template>
   <section class="comForm">
        <div class="comTit">
            <p>VIRNECT 회사소개서 다운로드</p>
            <p>
                <i @click="comModal()">
                    <img src="https://velog.velcdn.com/images/kyj0206/post/1af5b98b-2587-414f-b0e2-0b877bdadef0/image.png" alt="Xbutton" />
                </i>
            </p>
        </div>
        <div class="comCont">
            <!-- 구독폼 구역 -->
            <iframe src="https://pardot.virnect.com/l/929783/2022-06-16/3npm5" width="100%" height="600" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>
            <!-- 구독폼 구역 -->
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comModal: Function
    }

}
</script>

<style lang="scss" scoped>
body{
    &::after{
        position: absolute;
        content: '';
        background-color: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;
    }
}
.comForm{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .comTit{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #0a51b7;
        padding: 22px 30px;
        border: solid 2px #092e6e;
        border-bottom: none;
        p{
            &:first-child{
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #fff;
            }
            &:last-child{
                i{
                    img{
                        max-width: 34px;
                        width: 100%;
                    }
                }
            }
        }
    }
    .comCont{
        border: solid 2px #092e6e;
        border-top: none;
        background-color: #fff;
        padding: 60px;
    }
}

@media screen and(max-width: 600px) {
    body{
        position: relative;
    }
    .comForm{
        /* min-width: 600px; */
        width: 100vw;
        top: 0;
        left: 0;
        transform: translate(0);
    }
    body::after{
        /* min-width: 600px; */
        width: 100vw;
    }
}
@media screen and(max-width: 425px) {
    .comForm{
        top: 0;
        left: -6%;
    }
}
</style>