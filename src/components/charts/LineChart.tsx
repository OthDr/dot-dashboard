import { ResponsiveLine } from '@nivo/line'
import { lineMockData } from '../../data/lineMockData'

const LineChart: React.FC = () => (

    <div className="h-full">
        <ResponsiveLine
            data={lineMockData}
            margin={{ top: 20, right: 20, bottom: 30, left: 5 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0,
            }}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: 'blues' }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
        />
    </div>
);

export default LineChart;