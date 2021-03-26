

var TelegramBot = require('node-telegram-bot-api');


var token = '1516962113:AAG_SWW-xR_YpNYBC3oPxscHMymT5cI4jCY';

var bot = new TelegramBot(token, {polling: true});
bot.on("polling_error", (err) => console.log(err));

 cha3 =-1001297470507
   
bot.on("message",function(msg){

  console.log(msg)

  var  mention = "["+msg.from.first_name+"](tg://user?id="+(msg.from.id)+")"




  if(msg.text==='id'  && msg.from.id==655049808){
/*
   bot.exportChatInviteLink(msg.chat.id).then((link)=>{

bot.sendMessage(msg.chat.id,"link"+' \n'+link)


   });
   */
   bot.sendMessage(msg.chat.id,msg.chat.id)
  }
    

//رساله بالشخصي
  if(msg.text  && msg.chat.type==='private'){

    bot.sendMessage(msg.chat.id,'   '+"مطور بوت     "+' @'+'AliS219',
    {
      'parse_mode':'Markdown'
    }
    ); }


    if(msg.text.includes('www.chegg.com')  ){
     // bot.deleteMessage(msg.chat.id,msg.message_id)
      bot.sendMessage(msg.chat.id,'⚠️ لا تحوي المجموعة على حلول موقع Chegg'+'\n  الحلول فقط اذا كنت مشترك في الموقع حصرا ⚠️',{
      
        'disable_web_page_preview':true ,
          'parse_mode':'Markdown',
          'reply_markup':{ 
  
            'inline_keyboard':[
    
          [{ text:"🔰 اضغط هنا للاشتراك 🔰",url:"https://t.me/chegg2/12"}]]}



              }).then((result) => { setTimeout(() => {
                bot.deleteMessage(msg.chat.id, result.message_id)
                }, 25 * 1000)}).catch(err => console.log(err))
      
              }
      
      

//رساله بالكروب 
if(msg  ){ 
  
  


 
  bot.getChatMember(cha3,msg.from.id)   
 .then(res=>{
          //في حالة عدم وجود العضو في القناة left
  if(res.status==="left"){
  bot.deleteMessage(msg.chat.id,msg.message_id)
  bot.sendMessage(msg.chat.id,mention+'\n '+"مرحباً عزيزي🙏❤️يجب عليك الاشتراك بالقناة حتى تستطيع الكتابه في المجموعه "+"\n\n"
    ,{
     'disable_web_page_preview':true ,

           'parse_mode':'Markdown',
           'reply_markup':{ 
  
            'inline_keyboard':[
    
          [{ text:"رابط القناة ",url:"https://t.me/chegg2"}]]}
              }).then((result) => { setTimeout(() => {
                 bot.deleteMessage(msg.chat.id, result.message_id)
                 }, 20 * 1000)}).catch(err => console.log(err))
                }else{
                  //في حالة وجود العضوو بالقناة member
                   if(res.status==="member"){ }
                }})
               
              }
            });

              
                
