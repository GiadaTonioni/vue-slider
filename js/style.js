const {createApp} = Vue;

createApp({
    data(){
        return{
            serie:{
                images: [
                    './img/01.webp',  
                    './img/02.webp',
                    './img/03.webp',
                    './img/04.webp',
                    './img/05.webp',
                ]
            },
            activeImage: 0
        }
    },
    methods: {
        changeImage(index){
            this.activeImage = index
        },
        nextImage(){
            this.activeImage ++;
            if(this.activeImage > this.serie.images.length - 1){
                this.activeImage = 0
            }
        },
        previousImage(){
            this.activeImage --;
            if(this.activeImage < 0){
                this.activeImage = this.serie.images.length - 1;
            }
    }
}
    
}).mount('#app')

