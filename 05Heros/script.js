Vue.createApp({
    data(){
        return {
            heroSelect: "",
            avengerSelect: [],
            myDynamic: "",
            myBonds: [
                {text: "James Bond", value: "007"},
                {text: "Jammy Bond", value: "008"},
                {text: "Velry Bond", value: "009"}
            ]
        }
    }
}).mount('#vapp')