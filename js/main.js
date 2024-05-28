const {createApp} = Vue

createApp({
    data() {
        return {
            // array che contiene le email generate
            emails: [],
            // definisco il numero totale delle mail
            totalEmails: 10,
            // variabile che gestisce il caricamento
            loading: false,
        };
    },

    methods: {
        generateEmails() {
            this.loading = true;
            // reset arry
            this.emails = [];
            // generazione delle mail tramite ciclo for
            for (let i = 0; i<this.totalEmails; i++) {
                this.fetchEmail();
            }
        }
    },
}).mount('#app')