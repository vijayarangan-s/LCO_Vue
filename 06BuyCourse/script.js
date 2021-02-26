
const App = {
    data() {
        return {
            holdMyItem:[],
            courseList : [{
                id:'lco1',
                courseName:"Angular",
                subtitle:"Learn Angular with hitesh C",
                price: 200,
                courseImage: "ang.jpg",
                url: ""
            } ,
            {
                id:'lco2',
                courseName:"React",
                subtitle:"Learn REact with hitesh C",
                price: 1999,
                courseImage: "react.png",
                url: ""
            } ,
            {
                id:'lco3',
                courseName:"Vue",
                subtitle:"Learn Vue with hitesh C",
                price: 399,
                courseImage: "vue.jpg",
                url: ""
            }]
        }
    },
    computed: {
        finalBill(){
            return this.holdMyItem.reduce((acc, course) => 
                Number(Number(course.price)+Number(Number(course.price)*0.18)) + acc 
            , 0)
        }
    },
    methods: {
        addToHolder(course){
            this.holdMyItem.push(course)
        }
    }
}

Vue.createApp(App).mount('#vapp')