import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { dataPie } from '../../../dates/jummy';

const Pie = () => {
    return (
        <div className=" h-full p-6 relative bg-white rounded-xl">
            <div className="flex justify-between items-center">
                <div className="items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-900 text-base font-semibold leading-normal">Buy Courses</div>
                </div>
            </div>
            <div className=" mt-8">
                <AccumulationChartComponent
                    height='100%'
                    width='100%'
                    id='chart-pie'
                    legendSettings={{ visible: true, background: 'white' }}
                    tooltip={{ enable: true }}
                >
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            startAngle={0}
                            endAngle={360}
                            dataSource={dataPie}
                            xName='x'
                            yName='y'
                            explode={true}
                            explodeOffset="10%"
                            explodeIndex={2}
                            innerRadius='40%'>
                        </AccumulationSeriesDirective>
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    )
}

export default Pie