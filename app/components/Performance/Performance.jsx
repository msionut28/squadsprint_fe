// import { MoreVertical } from "react-feather";
'use client'
import dynamic from 'next/dynamic';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, TrendingDown } from 'react-feather';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Performance = () => {
    const perfomanceChartSeries = [30, 21, 15];
    const perfomanceChartOptions = {
        dataLabels: { enabled: !1 },
        labels: ['Direct', 'Referral', 'Organic'],
        colors: ['#16a34a', '#eab308', '#f43f53'],
        plotOptions: {
            radialBar: {
                startAngle: -168,
                endAngle: -450,
                hollow: {
                    size: '55%',
                },
                track: {
                    background: 'transaprent',
                },
                dataLabels: {
                    show: false,
                }
            }
        },
        chart: { type: 'radialBar' },
        stroke: { lineCap: "round" },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 300
                    }
                }
            },
            {
                breakpoint: 5000,
                options: {
                    chart: {
                        height: 320
                    }
                }
            }
        ]
    };

    return (
        <Card>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="mb-0 text-lg font-semibold">Your Team&apos;s Overall Performance</h4>
                    </div>
                </div>
                <div className="mb-8">
                    <Chart
                        options={perfomanceChartOptions}
                        series={perfomanceChartSeries}
                        type="radialBar"
                        width="100%"
                    />
                </div>
                {/* icon with content  */}
                <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center">
                        <CheckCircle className="text-green-600"/>
                        <h1 className="mt-3 mb-1 font-bold text-3xl text-green-600">76%</h1>
                        <h4 className="text-lg font-semibold">Projects</h4>
                        <p>Completed</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <TrendingUp className="text-yellow-500"/>
                        <h1 className="mt-3 mb-1 font-bold text-3xl text-yellow-500">32%</h1>
                        <h4 className="text-lg font-semibold">Tasks</h4>
                        <p>In-Progress</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <TrendingDown className="text-red-500"/>
                        <h1 className="mt-3 mb-1 font-bold text-3xl text-red-500">13%</h1>
                        <h4 className="text-lg font-semibold">Weekly Performance</h4>
                        <p>Behind</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Performance;
