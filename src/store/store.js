let store = {
  state: {
    //Class Toggle
    isColorClass: true,
    isHidden: false,
    isFired: false,
    isRight: false,
    //Transition Style
    translate: 'translateY(0vh)',
    //Location Control
    position: 0,
    location: 1,
    //For Scroll Controller
    sleep: 1500,
    save: 0,
    clock: 0,
    delta: 0,
    isScroll: null,
    //Animation Toggle
    rtl: false,
    ltr: false,
    worksA: false,
    worksB: false
  },
  setIsColor(){
    if(this.state.location > 1){
      this.state.isColorClass = false;
    } else {
      this.state.isColorClass = true;
    }
  },
  ScrollAction(){
    const tag = document.getElementsByClassName('content-wrapper')[0];
    tag.style.transition = "all 0.5s cubic-bezier(.69,.06,.34,.99) 0s";
    this.state.translate = 'translateY(' + (this.state.position * -100) + '%)';
    setTimeout(() => {
      tag.style.transition = "";
    },500);
  },
  scrollEvent(direction){
    switch (this.state.position){
      case 0:
        if(direction){
          this.state.position++;
          this.state.location++;
          this.ScrollAction();
          this.setIsColor();
          history.replaceState('','','/about');
        }
        break;
      case 1:
        if(direction){
          history.replaceState('','','/works');
          this.state.isHidden = true;
          this.state.rtl = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.isRight = true;
          },310);
          setTimeout( () => {
            this.state.isHidden = false;
            this.state.rtl = false;
            this.state.worksA = true;
          },700);
        } else {
          history.replaceState('','','/');
          this.state.position--;
          this.state.location--;
          this.ScrollAction();
          this.setIsColor();
        }
        break;
      case 2:
        if(direction){
          this.state.isColorClass = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.worksA = false;
          },310);
          setTimeout(() => {
            this.state.worksB = true;
          }, 500);
        } else {
          history.replaceState('','','/about');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
          },700);
          setTimeout( () => {
            this.state.worksA = false;
            this.state.isHidden = false;
          },1000);
        }
        break;
      case 3:
        if(direction){
          this.state.isColorClass = false;
          setTimeout(() => {
            this.state.position++;
            this.state.location++;
            this.state.worksB = false;
          },310);
          setTimeout(() => {
            this.state.worksA = true;
          }, 500);
        } else {
          this.state.isColorClass = false;
          setTimeout(() => {
            this.state.position--;
            this.state.location--;
            this.state.worksB = false;
          },310);
          setTimeout(() => {
            this.state.worksA = true;
          }, 500);
        }
        break;
      case 4:
        if(direction){
          this.state.isColorClass = false;
          setTimeout(() => {
            this.state.position++;
            this.state.location++;
            this.state.worksA = false;
          },310);
          setTimeout(() => {
            this.state.worksB = true;
          }, 500);
        } else {
          this.state.isColorClass = false;
          setTimeout(() => {
            this.state.position--;
            this.state.location--;
            this.state.worksA = false;
          },310);
          setTimeout(() => {
            this.state.worksB = true;
          }, 500);
        }
        break;
      case 5:
        if(direction){
          this.state.isColorClass = false;
          history.replaceState('','','/blogs');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.worksB = false;
            this.state.isRight = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
          },700);
          setTimeout( () => {
            this.state.isHidden = false;
          },1000);
        } else {
          this.state.isColorClass = false;
          setTimeout(() => {
            this.state.position--;
            this.state.location--;
            this.state.worksB = false;
          },310);
          setTimeout(() => {
            this.state.worksA = true;
          }, 500);
        }
        break;
      case 6:
        if(direction){
          history.replaceState('','','/contact');
          this.state.isHidden = true;
          this.state.rtl = true;
          setTimeout( () => {
            this.state.position++;
            this.state.location++;
            this.state.isRight = true;
          },310);
          setTimeout( () => {
            this.state.isHidden = false;
            this.state.rtl = false;
          },700);
          setTimeout( () => {
            this.state.isHidden = false;
          },1000);
        } else {
          history.replaceState('','','/works');
          this.state.isHidden = true;
          this.state.rtl = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = true;
          },310);
          setTimeout( () => {
            this.state.isHidden = false;
            this.state.rtl = false;
            this.state.worksB = true;
          },700);
          setTimeout( () => {
            this.state.isHidden = false;
          },1000);
        }
        break;
      case 7:
        if(!direction){
          history.replaceState('','','/blogs');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
          },700);
          setTimeout( () => {
            this.state.isHidden = false;
          },1000);
        }
        break;
      default:
        break;
    }
  },
  scrollMain(e){
    e.preventDefault();
    this.state.clock = e.timeStamp - this.state.save;
    this.state.save = e.timeStamp;
    this.state.delta = e.deltaY ? -(e.deltaY) : 0;
    if (!this.state.delta) {
      return;
    }
    if(!this.state.isFired && this.state.clock > 50){
      this.state.isFired = true;
      if(this.state.delta < 0){
        this.scrollEvent(true);
      } else {
        this.scrollEvent(false);
      }
      this.state.isScroll = setTimeout( () => {
        this.state.isFired = false;
      }, this.state.sleep);
    } else {
      return;
    }
  },
  paginationLinkAction(num){
    console.log('here');
    switch (num) {
      case 1:
        if(this.state.location !== 1){
          if(this.state.location === 2){
            this.scrollEvent(false);
          } else {
            history.replaceState('','','/');
            this.setLocation(0, false);
          }
        }
        break;
      case 2:
        if(this.state.location !== 2){
          if(this.state.location === 1){
            this.scrollEvent(true);
          } else {
            history.replaceState('','','/about');
            this.setLocation(1, false);
          }
        }
        break;
      case 3:
        if(this.state.location !== 3){
          history.replaceState('','','/works');
          this.setLocation(2 , true);
        }
        break;
      case 7:
        if(this.state.location !== 7){
          history.replaceState('','','/blogs');
          this.setLocation(6 , false);
        }
        break;
      case 8:
        if(this.state.location !== 8){
          history.replaceState('','','/contact');
          this.setLocation(7 , true);
        }
        break;
      default:
        break;
    }
  },
  setLocation(pos,right){
    this.state.isHidden = true;
    if(this.state.isRight){
      this.state.ltr = true;
    } else {
      this.state.rtl = true;
    }
    setTimeout( () => {
      this.state.position = pos;
      this.state.location = pos + 1;
      if(pos === 0) {
        this.state.translate = 'translateY(0%)';
      } else{
        this.state.translate = 'translateY(-100%)';
      }
      this.setIsColor();
    },310);
    setTimeout( () => {
      if(this.state.isRight){
        this.state.ltr = false;
      } else {
        this.state.rtl = false;
      }
      this.state.isRight = right;
      if(pos === 2){
        this.state.worksA = true;
      }
    },700);
    setTimeout( () => {
      this.state.isHidden = false;
    },1000);
  }
}

export default store;