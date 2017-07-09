export default function() {

   // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  

    this.get('/', function(){
      return {
        data: [{
          id:'model-home-day',
          title: 'Model Home in Newport Beach',
          development: 'Sudden Valley'
        }, {
          id:'model-home-night',
          title: 'Model Home in Newport Beach',
          development: 'Sudden Valley'
        },{
          id:'model-home-iraq',
          title: 'Model Home in Iraq',
          development: 'Baghdad'
        },{
          id:'model-home-mexico',
          title: 'Model Home in Newport Beach',
          development: 'Baja California'
        },]
      }
    });
   

  
}
