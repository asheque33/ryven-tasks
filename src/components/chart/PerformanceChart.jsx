import { chartData } from '@/data/chartData';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from '../ui/card';

const PerformanceChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length && label === '13') {
      return (
        <div
          className='bg-[#262D33] text-[#A2D2FC] p-3 rounded-lg shadow-lg text-sm font-medium'
          style={{
            transform: 'translateX(-180px)',
            marginLeft: '-20px', // Additional left adjustment
          }}
        >
          <div className='text-[14px] font-[400] font-poppins leading-[20px]'>
            Impression: <span className='font-semibold'>11,444</span>
          </div>
          <div className='text-[14px] font-[400] font-poppins leading-[20px]'>
            Clicks: <span className='font-semibold'>200</span>
          </div>
          <div className='text-[14px] font-[400] font-poppins leading-[20px]'>
            Click through rate: <span className='font-semibold'>8%</span>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <Card className='w-full mt-[30px] p-[19px]'>
      {/* Header with metrics */}
      <div className='flex items-center justify-between'>
        <h2 className='text-[22px] font-poppins font-semibold ml-[93px]'>
          Performance Metrics
        </h2>
        <div className='flex gap-8 text-sm'>
          <div className='text-center'>
            <div className='flex items-center gap-2'>
              <div className='w-[9px] h-[9px] rounded-full bg-[#1DBF73]'></div>
              <span className='text-xs font-medium'>Impression</span>
            </div>
            <div className='text-[22px] font-semibold mt-0.5'>45,200</div>
          </div>
          <div className='text-center'>
            <div className='flex items-center gap-2'>
              <div className='w-[9px] h-[9px] rounded-full bg-[#4592FF]'></div>
              <span className='text-xs font-medium'>Clicks</span>
            </div>
            <div className='text-[22px] font-semibold mt-0.5'>5,200</div>
          </div>
          <div className='text-center'>
            <div className='flex items-center gap-2'>
              <div className='w-[9px] h-[9px] rounded-full bg-[#6F00FF]'></div>
              <span className='text-xs font-medium'>Click through rate</span>
            </div>
            <div className='text-[22px] font-semibold mt-0.5'>8%</div>
          </div>
        </div>
      </div>

      <div className='h-96 w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            data={chartData}
            margin={{
              top: 20,
              right: 0,
              left: 20,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient
                id='impressionGradient'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop offset='0%' stopColor='#10b981' stopOpacity={0.4} />
                <stop offset='50%' stopColor='#10b981' stopOpacity={0.2} />
                <stop offset='100%' stopColor='#10b981' stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id='clicksGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.4} />
                <stop offset='50%' stopColor='#3b82f6' stopOpacity={0.2} />
                <stop offset='100%' stopColor='#3b82f6' stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id='ctrGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#8b5cf6' stopOpacity={0.4} />
                <stop offset='50%' stopColor='#8b5cf6' stopOpacity={0.2} />
                <stop offset='100%' stopColor='#8b5cf6' stopOpacity={0.1} />
              </linearGradient>
            </defs>

            {/* Grid - horizontal lines only */}
            <CartesianGrid
              strokeDasharray='none'
              stroke='#f3f4f6'
              vertical={false}
              horizontal={true}
            />

            {/* X-axis */}
            <XAxis
              dataKey='period'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: '#6b7280' }}
              interval={0}
            />

            {/* Y-axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: '#6b7280' }}
              domain={[0, 8000]}
              tickFormatter={(value) => `${value / 1000}K`}
              ticks={[0, 1000, 3000, 5000, 7000]}
              minTickGap={24}
            />

            {/* Custom tooltip */}
            <Tooltip
              position={'right'}
              content={<CustomTooltip />}
              cursor={false}
            />

            {/* Red vertical line at tooltip point */}
            <ReferenceLine
              x='13'
              stroke='#ef4444'
              strokeWidth={2}
              strokeDasharray='none'
            />

            {/* Areas - overlapping (not stacked) */}
            <Area
              type='monotone'
              dataKey='impression'
              stroke='#10b981'
              strokeWidth={2}
              fill='url(#impressionGradient)'
              dot={false}
              activeDot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
            />

            <Area
              type='monotone'
              dataKey='clicks'
              stroke='#3b82f6'
              strokeWidth={2}
              fill='url(#clicksGradient)'
              dot={false}
              activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
            />

            <Area
              type='monotone'
              dataKey='ctr'
              stroke='#8b5cf6'
              strokeWidth={2}
              fill='url(#ctrGradient)'
              dot={false}
              activeDot={{ r: 4, fill: '#8b5cf6', strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PerformanceChart;
