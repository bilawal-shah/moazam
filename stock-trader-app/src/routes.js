import Home from './components/myHome.vue'
import portfolio from './components/Portfolio/myPortfolio.vue'
import stocks from './components/Stocks/myStocks.vue'

export const routes=[
    {path:'/' , component:Home},
    {path: '/portfolio', component:portfolio},
    {path:'/stocks' , component: stocks}
]