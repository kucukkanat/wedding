<template>
    <div class="wrapper">
        <h2>Guestbook</h2>
        <form @submit.prevent="submitForm">
            <div class="field">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" placeholder="Your Name" required />
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" placeholder="Your Email" required />
            </div>
            <div class="field">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <div class="field">
                <label for="submit_button"></label>
            <button :disabled="submitting" id="submit_button" type="submit">Submit</button>
        </div>
        </form>
        <div v-if="alertMessage" class="alert">
            {{ alertMessage }}
        </div>
    </div>
</template>
  
<script>
const webhookUrl = `https://discord.com/api/webhooks/1100188427225419796/P6yqSCA7Eyqsi-XpIVRMts7o4dJSc-QtAW6E_jRN5fQtayb-K9tHtQNI9qH1RSEuJr-t`
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            alertMessage: '',
            submitting: false
        };
    },
    methods: {
        async submitForm() {
            this.submitting = true;
            try {

                const payload = {
                    content: `New message from ${this.name} (${this.email}): \n ${this.message}`
                };
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                this.alertMessage = 'Your message has been received. Thank you!';

                this.name = '';
                this.email = '';
                this.message = '';
            } catch (error) {
                this.alertMessage = 'Oops, something went wrong. Please try again later.';
            } finally {
                this.submitting = false;
                setTimeout(() => {
                    this.alertMessage = '';
                }, 5000);
            }
        }
    }
};
</script>
  
<style scoped>
input {}

textarea {

    height: 100px;
}

input,
textarea {
    font-family: Tahoma;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ddd;
    background: #fff;
    flex: 1;
}

.field {
    display: flex;
    align-items: center;
    margin: 5px 0px;
}

.field label {
    width: 100px;
}

h2 {
    margin: 0;
    border: 0px;
}

.alert {
    margin-top: 1em;
    padding: 1em;
    background-color: #c8e6c9;
    border-radius: 0.5em;
}

.wrapper {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
}

button {
    font-size: 20px;
    padding: 5px 10px;
    border: 2px solid #ddd;
    background-color: #fff;
}</style>