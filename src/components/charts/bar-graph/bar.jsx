import React, { useState } from 'react'
import { ColumnsDirective, ColumnDirective, ChartComponent, ColumnSeries, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, MultiColoredLineSeries } from '@syncfusion/ej2-react-charts'
import { dataBar } from '../../../dates/jummy'
import { useNavigate } from 'react-router-dom'

const Bar = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/admin-dashboard/dashboard/hourly-sales");
    }
    return (
        <div className=' w-full'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-zinc-900 text-base font-medium leading-normal">Hourly sales report</div>
                <div onClick={handleClick}  className="text-right text-[#52B6DF] text-sm font-semibold leading-tight cursor-pointer">View All</div>
            </div>
            <ChartComponent
                id='column-sparkLine'
                height='100%'
                primaryXAxis={{
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelRotation: 90,
                    chartArea: { width: 20 }
                }}
                primaryYAxis={{
                    minimum: 0,
                    maximum: 4500,
                    interval: 1500,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                }}
                legendSettings={{ mode: 'Range', background: 'white' }}
                tooltip={{ enable: true }}
                chartArea={{ border: { width: 0 } }}>
                <Inject services={[LineSeries, ColumnSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]} />
                <ColumnsDirective>
                    <ColumnDirective width='100%'></ColumnDirective>
                    <ColumnDirective width='100%'></ColumnDirective>
                </ColumnsDirective>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={dataBar}
                        xName="x"
                        yName="hours"
                        type="Column"
                        fill='#8FBFFF'
                        columnSpacing={0.1}
                        columnWidth={0.5}
                        cornerRadius={{
                            topLeft: 2,
                            topRight: 2,
                        }}>
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Bar