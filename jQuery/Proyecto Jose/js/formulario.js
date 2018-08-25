$(document).ready(function() {
    $(function() {
        $('#password').get(0).type = 'password';
        $('#confirma').get(0).type = 'password';

        $.validator.addMethod('nombre', function(value, element) {
            return this.optional(element) || /^[a-zA-Z]+$/.test(value);
        });
        $.validator.addMethod('apellido1', function(value, element) {
            return this.optional(element) || /^[a-zA-Z]+$/.test(value);
        });
        $.validator.addMethod('apellido2', function(value, element) {
            return this.optional(element) || /^[a-zA-Z]+$/.test(value);
        });
        $.validator.addMethod('email', function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/.test(value);
        });
        $.validator.addMethod('password', function(value, element) {
            return this.optional(element) || /^[a-z0-9_-]{6,18}$/.test(value);
        });
        $.validator.addMethod('confirma', function(value, element) {
            return this.optional(element) || /^([a-z]+[0-9]+)|([0-9]+[a-z]+)/i.test(value);
        });
        $.validator.addMethod('cp', function(value, element) {
            return this.optional(element) || /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(value);
        });
        $.validator.addMethod('dni', function(value, element) {
            return this.optional(element) || /^\d{8}[a-zA-Z]{1}$/.test(value);
        });
        $.validator.addMethod('address', function(value, element) {
            return this.optional(element) || /^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/.test(value);
        });
        $.validator.addMethod('city', function(value, element) {
            return this.optional(element) || /^[a-zA-Z]+$/.test(value);
        });
        $.validator.addMethod('numero', function(value, element) {
            return this.optional(element) || /^[0-9]+$/.test(value);
        });
        $.validator.addMethod('planta', function(value, element) {
            return this.optional(element) || /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(value);
        });
        $.validator.addMethod('puerta', function(value, element) {
            return this.optional(element) || /^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/.test(value);
        });


        $("#btn").on("click", function() {
            $("#formulario").validate({
                rules: {
                    email: { required: true, email: true, minlength: 8, maxlength: 30 },
                    cp: { required: true, cp: true, minlength: 4, maxlength: 6 },
                    nombre: { required: true, nombre: true, minlength: 3, maxlength: 20 },
                    apellido1: { required: true, apellido1: true, minlength: 3, maxlength: 20 },
                    apellido2: { required: false, apellido2: true, minlength: 3, maxlength: 20 },
                    password: { required: true, password: true, minlength: 8, maxlength: 16 },
                    confirma: { required: true, confirma: true, equalTo: '#password', minlength: 8, maxlength: 16 },
                    dni: { required: true, dni: true, minlength: 9, maxlength: 12 },
                    city: { required: true, city: true, minlength: 3, maxlength: 20 },
                    address: { required: true, address: true, minlength: 4, maxlength: 40 },
                    numero: { required: true, numero: true, minlength: 1, maxlength: 4 },
                    planta: { required: false, planta: true, minlength: 1, maxlength: 2 },
                    puerta: { required: false, puerta: true, minlength: 1, maxlength: 2 },

                },
                messages: {
                    email: {
                        required: '<p style="color: red">Campo requerido</p>',
                        email: '<p style="color: red">Formato incorrecto</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    cp: {
                        required: '<p style="color: red">Campo requerido</p>',
                        digits: '<p style="color: red">Solo numeros</p>',
                        minlength: '<p style="color: red">Mínimo 4 caracteres</p>',
                        maxlength: '<p style="color: red">Máximo 6 caracteres</p>'
                    },
                    nombre: {
                        required: '<p style="color: red">Campo requerido</p>',
                        nombre: '<p style="color: red">Solo letras</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    apellido1: {
                        required: '<p style="color: red">Campo requerido</p>',
                        apellido1: '<p style="color: red">Solo letras</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    apellido2: {
                        apellido2: '<p style="color: red">Solo letras</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    password: {
                        required: '<p style="color: red">Campo requerido</p>',
                        password: '<p style="color: red">Debe contener números y letras</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    confirma: {
                        required: '<p style="color: red">Campo requerido</p>',
                        confirma: '<p style="color: red">Debe contener números y letras</p>',
                        equalTo: '<p style="color: red">No coincide con tu contraseña</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    dni: {
                        required: '<p style="color: red">Campo requerido</p>',
                        dni: '<p style="color: red">Formato incorrecto</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    city: {
                        required: '<p style="color: red">Campo requerido</p>',
                        city: '<p style="color: red">Solo letras</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    address: {
                        required: '<p style="color: red">Campo requerido</p>',
                        address: '<p style="color: red">Solo letras</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    numero: {
                        required: '<p style="color: red">Campo requerido</p>',
                        numero: '<p style="color: red">Solo números</p>',
                        minlength: '<p style="color: red">Demasiado corto</p>',
                        maxlength: '<p style="color: red">Demasiado largo</p>'
                    },
                    planta: {
                        planta: '<p style="color: red">Solo números</p>',
                        minlength: '<p style="color: red">Mínimo 1 caracter</p>',
                        maxlength: '<p style="color: red">Máximo 2 caracteres</p>'
                    },
                    puerta: {
                        puerta: '<p style="color: red">Solo números</p>',
                        minlength: '<p style="color: red">Mínimo 1 caracter</p>',
                        maxlength: '<p style="color: red">Máximo 2 caracteres</p>'
                    },
                }
            });
        });
    });
});