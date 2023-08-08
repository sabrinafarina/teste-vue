const MyNameApp = {
    data() {
        return {
           name: "Bina",
           age: 16,
           location: "Rio Grande do Sul-Brasil"
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");