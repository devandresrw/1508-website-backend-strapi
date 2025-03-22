module.exports = ({ env }) => ({
    documentation: {
        enabled: true,
        config: {
            openapi: '3.0.0',
            info: {
                version: '1.0.0',
                title: 'API - Documentación',
                description: 'Documentación de tu API',
                termsOfService: 'https://ejemplo.com/terminos',
                contact: {
                    name: 'Equipo API',
                    email: 'contacto@ejemplo.com',
                    url: 'https://ejemplo.com',
                },
                license: {
                    name: 'Apache 2.0',
                    url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
                },
            },
            'x-strapi-config': {
                path: '/documentation',
                plugins: [
                    'email',
                    'upload',
                    'users-permissions',
                    // Añade aquí otros plugins que quieras documentar
                ],
            },
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_CLOUD_NAME'),
                api_key: env('CLOUDINARY_API_KEY'),
                api_secret: env('CLOUDINARY_API_SECRET'),
                folder: 'agency',
                use_filename: true,
                unique_filename: true,
                overwrite: false,
                resource_type: 'auto',
                secure: true, // Asegura que las URLs sean HTTPS
            },
            actionOptions: {
                upload: {
                    folder: 'agency',
                    use_filename: true,
                    unique_filename: true,
                },
                uploadStream: {
                    folder: 'agency',
                    use_filename: true,
                    unique_filename: true,
                },
                delete: {},
            },
        },
    }
});