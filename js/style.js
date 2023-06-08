const {createApp} = Vue;

createApp({
    data(){
        return{
            serie:[
                {
                    img:'img/01.webp',
                    didascalia: 'sono una didascalia'
                },
                {
                    img:'img/02.webp',
                    didascalia: 'sono una didascalia'
                },
                {
                    img:'img/03.webp',
                    didascalia: 'sono una didascalia'
                },
                {
                    img:'img/04.webp',
                    didascalia: 'sono una didascalia'
                },
                {
                    img:'img/05.webp',
                    didascalia: 'sono una didascalia'
                }
            ]
        }
    }
}).mount('#app')

