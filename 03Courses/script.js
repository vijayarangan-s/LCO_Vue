
const App = {
    data() {
        return {
            courseList : [{
                id:'lco1',
                courseName:"Angular",
                subtitle:"Learn Angular with hitesh C",
                price: "200",
                courseImage: "ang.jpg",
                url: ""
            } ,
            {
                id:'lco2',
                courseName:"React",
                subtitle:"Learn REact with hitesh C",
                price: "200",
                courseImage: "react.png",
                url: ""
            } ,
            {
                id:'lco3',
                courseName:"Vue",
                subtitle:"Learn Vue with hitesh C",
                price: "200",
                courseImage: "vue.jpg",
                url: ""
            }]
        }
    }
}

Vue.createApp(App).mount('#vapp')