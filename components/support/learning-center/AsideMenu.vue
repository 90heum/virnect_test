<template>
<div class="surplusWrapper">
   <!-- 탭메뉴 -->
     <span class="LearningCenterAside">
        <span @click="chooseTypeMenuAndToggle(null)">
            <p :class="`${isTypeMenu === null ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? "전체" : "All"}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span @click="chooseTypeMenuAndToggle(typeList[0].id)">
            <p :class="`${isTypeMenu === typeList[0].id ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? "User's Manual" : "User's Manual"}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>

        <span @click="chooseTypeMenuAndToggle(5)">
            <p :class="`${isTypeMenu === 5 ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? "Video Tutorial" : "Video Tutorial"}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span>
        <span @click="chooseTypeMenuAndToggle(typeList[1].id)"
               :class="`${isTypeMenu === typeList[1].id ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? typeList[1].name : typeList[1].nameEn}}</span>
        <span class="lastChild" @click="chooseTypeMenuAndToggle(typeList[2].id)"
               :class="`${isTypeMenu === typeList[2].id ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? typeList[2].name : typeList[2].nameEn}}</span>


        <!-- <span @click="chooseTypeMenuAndToggle(typeList[3].id)">
            <p :class="`${isTypeMenu === typeList[3].id ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? typeList[3].name : typeList[3].nameEn}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="LearningCenterTag"></i>
        </span> -->
    </span>

    <!-- 모바일 어사이드 -->
        <div class="LearningCenterMbAside select">
            <div class="selected"
                 @click="handleToggle()">
                <div class="selected-icon">
                    <img src="https://velog.velcdn.com/images/kyj0206/post/0f39f4c6-a786-41ea-b239-84f4997f5712/image.png" alt="다운아이콘">
                </div>
                <div class="selected-value">{{isTypeMenu === 5 ? "Video Tutorial" : isTypeMenu  ? $i18n.localeProperties.code === "ko" ? typeList.find(e => e.id === isTypeMenu).name : typeList.find(e => e.id === isTypeMenu).nameEn : $i18n.localeProperties.code === "ko" ? "전체" : "All"}}</div>
                <div class="arrow"></div>
                </div>
                <ul v-if="isToggle">
                <li class="option"
                    @click="chooseTypeMenuAndToggle(null, true)">{{$i18n.localeProperties.code === "ko" ? "전체" : "All" }}</li>
                <li class="option"
                    @click="chooseTypeMenuAndToggle(typeList[0].id, true)">{{$i18n.localeProperties.code === "ko" ? typeList[0].name : typeList[0].nameEn}}</li>
                <li class="option"
                    @click="chooseTypeMenuAndToggle(5, true)">Video Tutorial</li>
                <!-- <li class="option"
                    @click="chooseTypeMenuAndToggle(typeList[3].id, true)">{{$i18n.localeProperties.code === "ko" ? typeList[3].name : typeList[3].nameEn}}</li> -->
                </ul>
        </div>
</div>
</template>

<script>
export default {
    props: {
        typeList: Array,
        chooseTypeMenu: Function,
        isTypeMenu: Number
    },
    data() {
        return {
            isToggle: false
        }
    },
    methods: {
        handleToggle() {
            this.isToggle = !this.isToggle;
        },
        chooseTypeMenuAndToggle (id, isMobile = false) {
            if (isMobile) this.isToggle = !this.isToggle;
            this.chooseTypeMenu(id);
        }
    }
}
</script>

<style lang="scss" scoped>
.surplusWrapper {
            max-width: 180px;
            width: 100%;
}
    .LearningCenterAside{
        display: flex;
        gap: 30px;
        flex-direction: column;
        max-width: 180px;
        width: 100%;
        span{
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            &:hover{
                p{
                    text-decoration: underline;
                    text-underline-position: under;
                    color: #0a51b7;
                }
            }
            p{
                cursor: pointer;
                font-size: 18px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: -0.25px;
                color: #121212;
            }
            i{
                cursor: pointer;
                display: flex;
                img{
                    max-width: 19px;
                    min-width: 19px;
                    width: 100%;
                }
            }
        }
    }

    .lastChild {
        margin-top: -22px;
    }
     // 모바일
    // 모바일용
    .LearningCenterMbAside{
        display: none;
        max-width: 200px;
        width: 100%;
        border: 1px solid #999;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #121212;
        ul {
            max-width: 200px;
            width: 100%;
            border: 1px solid #999;
            position: absolute;
            background: #fff;
            border-top: none;
            margin: 1px 0 0 -1px;
            cursor: pointer;
            li {
                padding: 16.5px 15px;
                background-color: #f7f8f9;
                border-bottom: solid 1px #c5c8cf;
                &:last-child{
                    border-bottom: none;
                }
                &:hover{
                    background-color: #fff;
                    color: #0a51b7;
                }
            }
        }
        .selected {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 15px;
            .selected-icon{
                display: flex;
                align-items: center;
                img{
                    max-width: 34px;
                }
            }
            .selected-value {
                display: block;
                width: 100%;
                max-width: 90px;
            }
            .arrow {
                max-width: 19px;
                width: 100%;
                height: 19px;
                background: url("https://velog.velcdn.com/images/kyj0206/post/c30a0983-f07b-4a35-bf95-150eb3f3ab85/image.png") no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .LearningCenterAside .asideActive {
        text-decoration: underline;
        text-underline-position: under;
        color: #0a51b7;
    }
    @media screen and (max-width: 768px){
        .LearningCenterMbAside {
            display: block;
            transform: translate(0px, -83px);
            position: absolute;
        }
        .LearningCenterMbAside ul { 
            list-style: none;
            padding-left: 0px;
            width: 200px;
        }
        .LearningCenterAside { 
            display: none;
        }
    }
</style>