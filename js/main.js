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
    fetchEmail() {
        // uso axios per richiesta api
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            // pusho la email nell'array
            this.emails.push(response.data.response);
            // se la lunghezza dell'arrray = alle email totali smetto di generare
            if (this.emails.length === this.totalEmails) {
                this.loading = false;
            }
        });
    }
}).mount('#app')