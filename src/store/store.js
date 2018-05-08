import axios from 'axios';

let store = {
  state: {
    //Class Toggle
    isColorClass: true,
    isHidden: false,
    isFired: false,
    isKeyFired: false,
    isRight: false,
    isTablet: false,
    isScrollClick: null,
    // Previous Window Size
    prevWindowSize: 1000,
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
    worksB: false,
    showAbout: false,
    showBlog: false,
    showContact: false,
    URL: "https://anon.one/wp-json/wp/v2/posts?per_page=3&_embed",
    blogPostData: [],
    blogTitles: [],
    blogDates: [],
    blogImage: [],
    blogURL: []
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
        // First view
        if(direction){
          history.replaceState('','','/about');
          this.state.position++;
          this.state.location++;
          this.ScrollAction();
          this.setIsColor();
          this.state.showAbout = true;
        }
        break;
      case 1:
        // About ( Who I am )
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
            this.state.showAbout = false;
          },700);
        } else {
          history.replaceState('','','/');
          this.state.position--;
          this.state.location--;
          this.ScrollAction();
          this.setIsColor();
          setTimeout(() => {
            this.state.showAbout = false;
          }, 500);
        }
        break;
      case 2:
        // Works ( Yelp Camp )
        if(direction){
          this.state.isColorClass = false;
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
            this.state.showAbout = true;
          },700);
          setTimeout( () => {
            this.state.worksA = false;
            this.state.isHidden = false;
          },1000);
        }
        break;
      case 3:
        // Works ( wordpress )
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
        // Works ( portfolio )
        if(direction){
          this.state.isColorClass = true;
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
        // Works ( ballet )
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
      case 6:
        // Works ( Another works )
        if(direction) {
          this.state.isColorClass = false;
          history.replaceState('', '', '/blogs');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout(() => {
            this.state.position++;
            this.state.location++;
            this.state.worksB = false;
            this.state.isRight = false;
          }, 310);
          setTimeout(() => {
            this.state.ltr = false;
            this.state.showBlog = true;
          }, 700);
          setTimeout(() => {
            this.state.isHidden = false;
          }, 1000);
        } else {
          this.state.isColorClass = true;
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
      case 7:
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
            this.state.showBlog = false;
            this.state.showContact = true;
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
            this.state.worksA = true;
            this.state.showBlog = false;
          },700);
          setTimeout( () => {
            this.state.isHidden = false;
          },1000);
        }

        break;
      case 8:
        if(!direction){
          history.replaceState('','','/blogs');
          this.state.isHidden = true;
          this.state.ltr = true;
          setTimeout( () => {
            this.state.position--;
            this.state.location--;
            this.state.isRight = false;
            this.state.showContact = false;
          },310);
          setTimeout( () => {
            this.state.ltr = false;
            this.state.showBlog = true;
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
      case 8:
        if(this.state.location !== 8){
          history.replaceState('','','/blogs');
          this.setLocation(7 , false);
          this.getPostData();
        }
        break;
      case 9:
        if(this.state.location !== 9){
          history.replaceState('','','/contact');
          this.setLocation(8 , true);
        }
        break;
      default:
        break;
    }
  },
  setLocation(pos,right){
    this.state.isHidden = true;
    this.state.showAbout = false;
    this.state.showBlog = false;
    this.state.showContact = false;
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
      if(pos === 1){
        this.state.showAbout = true;
      }
      if(pos === 2){
        this.state.worksA = true;
      }
      if(pos === 7){
        this.state.showBlog = true;
      }
      if(pos === 8){
        this.state.showContact = true;
      }
    },700);
    setTimeout( () => {
      this.state.isHidden = false;
    },1000);
  },
  arrowKeyEvent(direction){
    if(!this.isKeyFired){
      this.isKeyFired = true;
      if(direction){
        this.scrollEvent(true);
      } else {
        this.scrollEvent(false);
      }
      setTimeout( () => {
        this.isKeyFired = false;
      },1500);
    }
  },
  checkDeviceWidth(){
    if(document.body.clientWidth <= 900){
      this.state.translate = 'translateY(0)';
      this.isRight = false;
      this.isTablet = true;
    } else {
      this.isTablet = false;
    }
    return this.isTablet;
  },
  navColourChange(){
    const tag = document.getElementsByClassName('firstView')[0];
    let tagHeight = tag.clientHeight;
    if(window.pageYOffset + 60 >= tagHeight){
      this.isColorClass = false;
      document.querySelector('path').classList.add('logoBlack');
      document.querySelector('path').classList.remove('logoWhite');
    } else {
      this.isColorClass = true;
      document.querySelector('path').classList.add('logoWhite');
      document.querySelector('path').classList.remove('logoBlack');
    }
  },
  targetController(num){
    console.log('targetController');
    switch (num){
      case 1:
        this.smoothScroll('.firstView');
        this.isColorClass = true;
        break;
      case 2:
        this.smoothScroll('.about');
        this.isColorClass = false;
        break;
      case 3:
        this.smoothScroll('.works');
        this.isColorClass = false;
        break;
      case 8:
        this.smoothScroll('.blogs');
        this.isColorClass = false;
        break;
      case 9:
        this.smoothScroll('.contact');
        this.isColorClass = false;
        break;
      default:
        break;
    }
  },
  smoothScroll(t){
    if(this.state.isScrollClick == null){
      const tag = document.querySelector(t);
      tag.rect = tag.getBoundingClientRect();
      tag.posY = tag.rect.top + window.pageYOffset;

      let direction, move, totalScroll;
      direction = (tag.posY < window.pageYOffset) ? -1 : 1;
      move = 50 * direction;
      totalScroll = window.pageYOffset;

      this.state.isScrollClick = setInterval(() => {
        if( (direction === 1 && totalScroll >= tag.posY) ||
        (direction === -1 && totalScroll <= tag.posY) ){
          window.scrollTo(0, tag.posY);
          clearInterval(this.state.isScrollClick);
          this.state.isScrollClick = null;
          return;
        }

        window.scrollBy(0, move);
        totalScroll += move;
      },10);
    }
  },
  getPostData(){
    axios.get(store.state.URL)
      .then((res) =>{
        store.state.blogPostData = res.data;
      });
    for(var i = 0, len = this.state.blogPostData.length; i < len; i++){
      //Image
      this.state.blogImage.push(this.state.blogPostData[i]._embedded["wp:featuredmedia"][0].source_url);
      //
      // this.state.blogDates.push(this.state.blogPostData[i].)
      //Title
      this.state.blogTitles.push(this.state.blogPostData[i].title.rendered);

    }
    console.log(this.state.blogPostData);
    return store.state.blogPostData;
  }
}

export default store;