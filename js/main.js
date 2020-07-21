var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weathers:[],
    },
    methods:{
        getWeather:function(city){
            var that = this
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+city).then(
                function(response){
                // console.log(response);
                // console.log(response.data.data.forecast);
                that.weathers = response.data.data.forecast;
                that.city = response.data.data.city;
                },
                function(err){
                console.log(err);
                },
            )    
        }
    }
})

var music = new Vue({
    el:"#music",
    data:{
        keyword:'',
        songlist:[],
        weathers:[],
    },
    methods:{
        getSongs:function(keyword){
            var that = this
            axios.get('https://autumnfish.cn/search?keywords='+keyword).then(
                function(response){
                console.log(response);
                console.log(response.result.songs);
                that.songlist = response.result.songs;
                },
                function(err){
                console.log(err);
                },
            )    
        }
    }
})

