<template >
    <v-container grid-list-md text-xs-center>
        <v-layout align-center justify-center row fill-height>
            <v-layout align-center column>
                <div class="display-3 pb-5 mb-5">Welcome to project analyzer</div>

                <v-flex>
                    <v-btn round outline color="blue" large href="/dashboard">Enter the dashboard</v-btn>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
    import {required, minLength, alphaNum} from 'vuelidate/lib/validators';
    export default {
        name: "landing",
        data() {
            return {
                dialog: false,
                username: '',
                password: '',
                errorMessageUsername: null,
                errorMessagePassword: null
            }
        },
        validations: {
            username: {
                required,
                minLength: minLength(8)
            },
            password: {
                required,
                minLength: minLength(8),
                alphaNum
            }
        },
        methods: {
            validateAndLogin: function () {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.setErrorMessages();
                    console.log("INVALID");
                } else {
                    this.resetErrorMessages();
                }
            },
            setErrorMessages: function () {
                this.errorMessageUsername = 'Username is Invalid!';
                this.errorMessagePassword = 'Password is Invalid!';
            },
            resetErrorMessages: function () {
                this.errorMessageUsername = '';
                this.errorMessagePassword = '';
            }
        }
    }
</script>
