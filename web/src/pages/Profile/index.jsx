import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { format, formatISO } from 'date-fns'
import { useLocalStorage, useAsyncFn } from 'react-use'
import axios from 'axios'

import {Icon, Card, DateSelect} from '~/components'

export const Profile = () => {
    const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)))
    const [auth, setAuth] = useLocalStorage('auth', {})

    const [state, doFetch] = useAsyncFn(async (params) => {
        const res = await axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            url: '/games',
            params
        })

        return res.data
    })
    
    useEffect(() => {
        doFetch({ gameTime: currentDate })
    }, [currentDate])

    
    if(!auth?.user?.id) {
        return <Navigate to="/" repalce={true} />
      }

    return (
        <>

            <header className="bg-red-500 text-white">
                <div className="container max-w-3xl flex justify-between p-4">
                    <img src="/imgs/logo-red.svg" className="w-28 md:w-40"/>
                    <div onClick={() => setAuth({})} className="p-2 cursor-pointer">
                        Sair
                    </div>
                </div>
            </header>

            <main className="space-y-6">
                <section id="header" className="bg-red-500 text-white">
                    <div className="container max-w-3xl space-y-2 p-4">
                        <a href="/dashboard">
                            <Icon name="back" className="w-10"/>
                        </a>
                        <h3 className="text-2xl font-bold">{auth.user.name}</h3>
                    </div>
                </section>

                <section id="content" className="container max-w-3xl p-4 space-y-4">

                    <h2 className="text-red-500 text-xl font-bold">
                        Seus palpites
                    </h2>

                    <DateSelect currentDate={currentDate} onChange={setDate} />

                    <div className="space-y-4">
                        {state.loading && 'Carregando jogos.....'}
                        {state.error && 'Ops! Algo deu errado.'}

                        {!state.loading && !state.error && state.value?.map(game => (
                            <Card
                                key={game.id}
                                gameId={game.id}
                                homeTeam={game.homeTeam}
                                awayTeam={game.awayTeam}
                                gameTime={format(new Date(game.gameTime), 'H:mm')}
                            />
                        ))}
                    </div>
                    
                </section>
            </main>
        </>   
    )
}