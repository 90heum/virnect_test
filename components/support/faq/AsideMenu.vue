<template>
<div class="surplusFaqWrapper">
    <!-- aside -->
    <span class="FAQAside">
        <span @click="handleMobileTab(null)">
            <p :class="`${isType === null ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? "전체" : "All"}}</p>
        </span>
        <span v-for="(data, idx) of asideMenuList"
              :key="idx"
              @click="handleMobileTab(data.id)">
            <p :class="`${isType === data.id ? 'asideActive' : ''}`">{{$i18n.localeProperties.code === "ko" ? data.name : data.nameEn}}</p>
            <i><img src="https://velog.velcdn.com/images/kyj0206/post/677e0a5b-146e-46a5-a5db-ef2b185febf4/image.png"
                    alt="noticeTag"></i>
        </span>
    </span>

     <!-- 모바일 어사이드 -->
    <div class="FAQMbAside select"
         @click="() => isToggle = !isToggle">
        <div class="selected">
            <div class="selected-icon">
                <img src="https://velog.velcdn.com/images/kyj0206/post/0f39f4c6-a786-41ea-b239-84f4997f5712/image.png" alt="다운아이콘">
            </div>
            <div class="selected-value">{{isType ? $i18n.localeProperties.code === "ko" ? asideMenuList[asideMenuList.findIndex(e => e.id === isType)].name : asideMenuList[asideMenuList.findIndex(e => e.id === isType)].nameEn : $i18n.localeProperties.code === "ko" ? "전체" : "All"}}</div>
            <div class="arrow"></div>
            </div>
            <ul v-if="isToggle">
            <li class="option"
                @click="handleMobileTab(null)">{{$i18n.localeProperties.code === "ko" ? "전체" : "All" }}</li>
            <li class="option"
                v-for="(data, idx) of asideMenuList"
                :key="idx"
                @click="handleMobileTab(data.id)">{{$i18n.localeProperties.code === "ko" ? data.name : data.nameEn}}</li>
            </ul>
    </div>
</div>
</template>

<script>
export default {
    props: {
        asideMenuList: Array,
        chooseType: Function,
        isType: [Number, Boolean],
        isCategory: [Number, Boolean]
    },
    data() {
        return {
            isToggle: false
        }
    },
    methods: {
        handleMobileTab (e) {
            this.isToggle = !this.isToggle;
            this.$router.push(`?type=${e ? e : ''}${this.isCategory ? '&category=' + this.isCategory : ''}`);
            // this.chooseType(e);
        },
    }
}
</script>




<style lang="scss" scoped>
.surplusFaqWrapper { width: 100%; max-width: 200px;}
    .FAQAside{
        display: flex;
        gap: 30px;
        flex-direction: column;
        max-width: 180px;
        width: 100%;
        span{
            
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
                font-size: 20px;
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
                    width: 100%;
                }
            }
        }
    }
        // 모바일용
    .FAQMbAside{
        display: none;
        max-width: 200px;
        width: auto;
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
    .FAQAside .asideActive {
        text-decoration: underline;
        text-underline-position: under;
        color: #0a51b7;
    }
    @media screen and (max-width: 768px) {
        .FAQAside { display: none; }
        .FAQMbAside { display: block; }
        .FAQMbAside ul { 
            list-style: none;
            padding-left: 0px;
        }
    }
</style>