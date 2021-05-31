import Head from 'next/head'
import { FC } from 'react'
import { useLingui } from '@lingui/react'
import SwapContainer from '../features/swap/SwapContainer'
import PriceHeaderStats from '../features/pro/PriceHeaderStats'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProProvider from '../context/Pro'
import TVChartContainer from '../features/pro/TVChartContainer'
import TabCard from '../components/TabCard'
import SwapHistory from '../features/pro/SwapHistory'
import QuantStats from '../features/pro/QuantStats'
import { t } from '@lingui/macro'
import UserSwapHistory from '../features/pro/UserSwapHistory'
import OrderForm from '../features/pro/OrderForm'
import MarketSelect from '../features/pro/MarketSelect'

const Pro: FC = () => {
    const { i18n } = useLingui()

    return (
        <ProProvider>
            <Header />
            <Head>
                <title>SushiPro | Sushi</title>
                <meta name="description" content="Pro" />
            </Head>
            <div className="grid grid-cols-12 divide-x divide-y h-[calc(100vh-80px)]">
                <div className="col-span-2 border-dark-800">
                    <MarketSelect />
                </div>
                <div className="col-span-10 border-dark-800">
                    <PriceHeaderStats />
                </div>
                <div className="col-span-2 border-dark-800">
                    <OrderForm />
                </div>
                <div className="col-span-10 border-dark-800">
                    <TVChartContainer />
                </div>
                <div className="col-span-2 border-dark-800">
                    <QuantStats />
                </div>
                <div className="col-span-10 border-dark-800">
                    <TabCard
                        titles={[i18n._(t`All Swaps`), i18n._(t`User Swaps`)]}
                        components={[<SwapHistory />, <UserSwapHistory />]}
                    />
                </div>
            </div>
            <Footer />
        </ProProvider>
    )
}

export default Pro
