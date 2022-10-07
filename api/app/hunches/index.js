import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const create = async ctx => {
    
    if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
        ctx.status = 400
        return
    }

    const { gameId, homeTeamScore = 0, awayTeamScore = 0 } = ctx.request.body
    const data = { gameId, homeTeamScore, awayTeamScore }
    
}