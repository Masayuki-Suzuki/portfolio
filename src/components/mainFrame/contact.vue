<template>
  <section class="contact" :class="{'contact-active': pageController()}">
    <h1 class="contact__hd">contact</h1>
    <form class="contact__form">
      <label class="ttl">Your name<span class="require">*</span> :
        <input type="text" placeholder="John Snow" name="name" required>
      </label>
      <label class="ttl">company :
        <input type="text" placeholder="House Stark" name="company">
      </label>
      <label class="ttl">e-mail<span class="require">*</span> :
        <input type="email" placeholder="john@stark.com" name="email" required>
      </label>
      <label class="ttl">message<span class="require">*</span> :
        <textarea placeholder="Winter is Coming" rows="1" name="msg" required></textarea>
      </label>
      <div class="btn">
        <button class="submit" @click="sendMsg($event)">send</button>
      </div>
      <p v-if="sending" class="submitMsg">{{ message }}</p>
    </form>
  </section>
</template>

<script>
  import Vue from 'vue';
  import store from '../../store/store';
  import axios from 'axios';

  export default {
    data: function () {
      return {
        sending: false,
        message: "",
        inputData: {}
      }
    },
    methods: {
      pageController(){
        if(document.body.clientWidth <= 900){
          return true;
        }
        return store.state.showContact;
      },
      sendMsg(event){
        let name, company ,email, msg;
        name = document.getElementsByName('name')[0];
        company = document.getElementsByName('company')[0];
        email = document.getElementsByName('email')[0];
        msg = document.getElementsByName('msg')[0];

        //Initialize Custom Validity
        name.setCustomValidity("");
        email.setCustomValidity("");
        msg.setCustomValidity("");
        if(name.validity.valueMissing) {
          name.setCustomValidity("Please input your name.");
        } else if(email.validity.typeMismatch || email.validity.valueMissing) {
          email.setCustomValidity("Please input your collect e-mail address.");
        } else if(msg.validity.valueMissing){
          msg.setCustomValidity("Please input your message.")
        } else {
          name.setCustomValidity("");
          email.setCustomValidity("");
          msg.setCustomValidity("");
          this.inputData.name = name.value;
          this.inputData.company = company.value;
          this.inputData.email = email.value;
          this.inputData.msg = msg.value;
          axios.post('/contact' , this.inputData).then(res => {
            this.sending = true;
            console.log(res.status, res.statusText, res.data)
            this.message = res.data;
          })
            .catch(error => {
              this.sending = false
              throw error
            })
          event.preventDefault();
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  .contact{
    background: $bg-color;
    height:100%;
    padding: 25px;
    position: relative;
    width: 100%;
    @media (max-height: 800px){
      padding: 15px;
    }
    @media (max-width: 900px){
      background: #fff;
      padding: 90px 0;
    }
    @media (max-width: 550px){
      padding: 50px 0;
    }
    &__hd{
      color: $main-text-color;
      @include rem(60);
      font-weight:300;
      letter-spacing: 0.02em;
      line-height: (72/60);
      margin: 70px 0 0;
      opacity: 0;
      text-align: center;
      text-transform: uppercase;
      transform: translateY(30px);
      transition: all 0.4s ease 0s;
      @media (max-height: 800px){
        margin: 5% 0 0;
      }
      @media (max-height: 750px){
        @include rem(55);
        margin: 3% 0 0;
      }
      @media (max-height: 700px){
        @include rem(45);
        margin: 7% 0 0;
      }
      @media (max-height: 650px){
        margin: 6% 0 0;
      }
      @media (max-height: 600px){
        @include rem(40);
      }
      @media (max-height: 550px){
        margin: 4% 0 0;
      }
      @media (max-width: 900px){
        @include rem(50);
        line-height: 1;
        margin: 0;
      }
      @media (max-width: 740px){
        @include rem(40);
      }
    }
    &__form{
      margin: 70px auto 0;
      max-width: 560px;
      @media (max-height: 800px){
        margin: 5% auto 0;
      }
      @media (max-height: 600px){
        margin: 4% auto 0;
      }
      @media (max-height: 550px) {
        margin: 2% auto 0;
      }
      @media (max-width: 740px){
        width: 80%;
      }
    }
    .ttl{
      color: $main-text-color;
      display: block;
      @include rem(22);
      font-weight: 300;
      opacity: 0;
      text-transform: uppercase;
      transform: translateY(30px);
      transition: all 0.4s ease 0s;
      @media (max-height: 700px){
        @include rem(18);
      }
    }
    .require{
      color: #E00606;
    }
    input,textarea{
      background: none;
      border: 0;
      border-bottom: solid 1px #979797;
      border-radius: 0;
      display: block;
      @include rem(22);
      font-weight: 300;
      margin: 10px 0 35px;
      padding: 5px 10px;
      width: 100%;
      @media (max-height: 700px){
        @include rem(18);
        margin: 10px 0 25px;
      }
      @media (max-height: 600px){
        margin: 0px 0 25px;
      }
      &:-ms-input-placeholder{
        color: #999;
        font-weight: 300;
      }
      &::-webkit-input-placeholder{
        color: #999;
        font-weight: 300;
      }
      &:placeholder-shown{
        color: #999;
        font-weight: 300;
      }
    }
    .btn{
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.4s ease 0s;
    }
    .submit{
      background: transparent;
      border: solid 1px $main-color;
      color: $main-text-color;
      display: inline-block;
      @include rem(14);
      overflow: hidden;
      padding: 10px 20px;
      position: relative;
      text-transform: uppercase;
      transition: color .4s ease 0s;
      width: 180px;
      z-index: 1;
      &:after{
        background: $main-color;
        content:"";
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: matrix(1,0,-1,1,0,0);
        transition: all .5s ease 0s;
        width: 0;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &:after{
          left: -25%;
          width: 150%;
        }
      }
    }
  }
  .contact-active{
    .contact{
      &__hd{
        opacity: 1;
        transform: translateY(0);
        transition: all 0.4s ease 0.2s;
      }
    }
    .ttl{
      opacity: 1;
      transform: translateY(0);
      &:first-of-type{
        transition: all 0.4s ease 0.4s;
      }
      &:nth-of-type(2){
        transition: all 0.4s ease 0.6s;
      }
      &:nth-of-type(3){
        transition: all 0.4s ease 0.8s;
      }
      &:last-of-type{
        transition: all 0.4s ease 1s;
      }
    }
    .btn{
      opacity: 1;
      transform: translateY(0);
      transition: all 0.4s ease 1.2s;
    }
  }
</style>