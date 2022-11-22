<template>
  <div class="box-statics" ref="observer">
  <div class="percent-statics">
    <svg>
      <circle cx="70" cy="70" r="70"></circle>
      <circle cx="70" cy="70" r="70"></circle>
    </svg>
    <div class="num-statics">
      <div>{{ countShow }}</div>
    </div>
  </div>
  <h2 class="h2__title">Автомобилей подобрано нашим клиентам</h2>
</div>
  </template>
  <script>
  export default {
  data() {
    return {
      counter: 16000,
      countShow: 0,
      flag: 0
    }
  },
  
     mounted() {
      let options = {
        threshold: [1]
      };
      const callback = function(entries,options){
        entries.forEach( entry =>{
          const {isIntersecting} = entry
          if(isIntersecting){
            startCounter();
          }
        })
      }
      const observer = new IntersectionObserver(callback,options)
      observer.observe(this.$refs.observer)

      function startCounter(){
              let timer = setInterval( ()=>{
            this.countShow += 225;
                if(this.countShow >= this.counter){
                 clearInterval(timer);
                }
           },300-(Math.random()*50))
            }
     },
  };
  </script>
  <style scoped>
  .box-statics
{
  background:#fff;
  width:300px;
  height:400px;
  padding: 30px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  flex-direction:column;
  box-shadow:0 30px 60px rgba(0,0,0,.4);
  transition: transform .2s;
}
.box-statics .percent-statics
{
  width:150px;
  height:150px;
  position:relative;
}
.box-statics .percent-statics svg
{
  width:150px;
  height:150px;
  position:relative;
}
.box-statics .percent-statics svg circle
{
  width:150px;
  height:150px;
  fill:none;
  stroke-width:10;
  stroke:#000;
  transform:translate(5px,5px);
  stroke-dasharray:440;
  stroke-dashoffset:440;
  stroke-linecap:round;
}
.box-statics .percent-statics svg circle:nth-child(1)
{
  stroke-dashoffset:0;
  stroke:#f3f3f3;
}
.box-statics .percent-statics svg circle:nth-child(2)
{
  stroke-dashoffset:calc(440 - (440 * 100) / 100);
  stroke:#03a9f4;
}
.box-statics .percent-statics .num-statics
{
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  color:#111;
}
.box-statics .percent-statics .num-statics h2
{
  font-size:48px;
}
.box-statics .percent-statics .num-statics h2 span
{
  font-size:24px;
}
.box-statics .text-statics
{
  padding: 10px 0 0;
  color:#999;
  font-weight:700;
  letter-spacing:1px;
}

</style>