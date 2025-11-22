
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
                body: JSON.stringify({
                    model: "gemma-2b-aps-it",
                    messages: [
                        { "role": "system", "content": "Always answer in rhymes. Today is Thursday" },
                        { "role": "user", "content": "What day is it today?" }
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