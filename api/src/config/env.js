import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 8000

// Hostname
export const HOST_NAME = process.env.HOST_NAME || "http://localhost"
