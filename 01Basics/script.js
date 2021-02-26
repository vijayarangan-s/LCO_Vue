const App = {
    data(){
       return{
        name: "vijayarangan"
       } 
    }
}

Vue.createApp(App).mount('#app')
Vue.createApp({
    data(){
        return {
            name: "Vue3 Course"
        }
    }
}).mount('#app1')