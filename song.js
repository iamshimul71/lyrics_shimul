
//initially hide showsection here
const hideResult = document.getElementById('hide-show-result').style.display="none"
// End initially hide showsection here
 const getsongName = document.getElementById('song-name').value
 const songName = document.getElementById('song-name')
document.getElementById('search-butn').addEventListener('click',function(){
  document.getElementById('hide-show-result').style.display="block"
  //This is suggest Api
    fetch('https://api.lyrics.ovh/suggest/'+songName.value)
    .then(res => res.json())
    .then(data => {

      for(let i=0;i<=9;i++)
      {
        const art = data['data'][i]['artist'].name
        const songname = data['data'][i]['title']
        const album = data['data'][i]['title_short']
       
     
      
         
         //This is Lyrics Api start
          if(i==0)
          {
          document.getElementById('singer').innerHTML='Album by '+art;
          document.getElementById('1st').innerHTML=songname;
          document.getElementById('playsong').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
             
            })
          })
         }
         else if(i==1)
         {
          document.getElementById('singer2').innerHTML='Album by '+art
          document.getElementById('2nd').innerHTML=songname;
          document.getElementById('playsong2').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==2)
         {
          document.getElementById('singer3').innerHTML='Album by '+art
          document.getElementById('3rd').innerHTML=songname;
          document.getElementById('playsong3').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==3)
         {
          document.getElementById('singer4').innerHTML='Album by '+art
          document.getElementById('4th').innerHTML=songname;
          document.getElementById('playsong4').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==4)
         {
          document.getElementById('singer5').innerHTML='Album by '+art
          document.getElementById('5th').innerHTML=songname;
          document.getElementById('playsong5').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==5)
         {
          document.getElementById('singer6').innerHTML='Album by '+art
          document.getElementById('6th').innerHTML=songname;
          document.getElementById('playsong6').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==6)
         {
          document.getElementById('singer7').innerHTML='Album by '+art
          document.getElementById('7th').innerHTML=songname;
          document.getElementById('playsong7').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==7)
         {
          document.getElementById('singer8').innerHTML='Album by '+art
          document.getElementById('8th').innerHTML=songname;
          document.getElementById('playsong8').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==8)
         {
          document.getElementById('singer9').innerHTML='Album by '+art
          document.getElementById('9th').innerHTML=songname;
          document.getElementById('playsong9').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }
         else if(i==9)
         {
          document.getElementById('singer10').innerHTML='Album by '+art
          document.getElementById('10th').innerHTML=songname;
          document.getElementById('playsong10').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
          
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
              document.getElementById('album-title').innerHTML=album
            })
          })
         }

        
       





     
      }

    
    })
   
       
 

})



