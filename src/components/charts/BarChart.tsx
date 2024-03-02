import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import { barData } from '../../data/barData'

const BarChart: React.FC = () => {
    return (
        <ResponsiveBar
            data={barData}
            keys={[
                'Users',
                'Clicks',
                'Sales',
            ]}
            indexBy="month"
            margin={{ top: 20, right: 0, bottom: 10, left: 20 }}
            padding={0.30}
            innerPadding={5}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'purple_blue' }}
            borderRadius={6}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            enableGridY={false}
            labelSkipWidth={11}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[]}
            role="Doth"
            ariaLabel="Doth stats"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
    )
}

export default BarChart