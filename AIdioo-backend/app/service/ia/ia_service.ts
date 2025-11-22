
import logger from '@adonisjs/core/services/logger'

export default class IAService {
    async testConnection() {
        try {
            const response = await fetch('http://127.0.0.1:1234/v1/models', { method: "GET" })

            let data = await response.json()
            return data
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : String(e)
            logger.error('Error connecting to LM Studio: %s', errorMessage)
            throw new Error("Error al intentar establecer conexión con el modelo")
        }
    }

    async chats() {
        try {
            const response = await fetch('http://127.0.0.1:1234/v1/chat/completions', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "qwen/qwen3-4b-2507",
                    messages: [ 
                        //  { "role": "user", "content": "Que dia es hoy?" },
                    //    { "role": "user", "content": "Hoy no es 5 de abril" }
                    //    { "role": "user", "content": "Puedes decirme el año actual y como me llamo ?" },
                    //    { "role": "user", "content": "Me llamo marcos, podrias decirme como darte contexto para que siempre lo recuerdes ?" }
                    //    { "role": "user", "content": "Como te dije que me llamaba ?" },
                    //    { "role": "user", "content": "Me llamo marcos" }
                       { "role": "user", "content": "Llamame por mi nombre, anteriormente dijiste que lo guardarias" }

                ],
                    max_tokens: 1024,
                    temperature: 0.7,
                    stream: false
                })
            })
            let data = await response.json()
            console.log(data)
            return data

        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : String(e)
            logger.error('Error connecting to LM Studio: %s', errorMessage)
            throw new Error("Error al intentar establecer conexión con el modelo")
        }
    }
} 