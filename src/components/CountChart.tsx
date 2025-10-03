"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with a label";

const chartData = [
  { name: "Boys", count: 1000, fill: "#C3EBFA" },
  { name: "Girls", count: 234, fill: "#FAE27C" },
];

const chartConfig = {
  count: {
    label: "Students",
  },
  boys: {
    label: "Boys",
    color: "#C3EBFA",
  },
  girls: {
    label: "Girls",
    color: "#FAE27C",
  },
} satisfies ChartConfig;

const CountChart = () => {
  // Calculate totals and percentages
  const totalStudents = chartData.reduce((sum, item) => sum + item.count, 0);
  const boysCount = chartData.find((d) => d.name === "Boys")?.count || 0;
  const girlsCount = chartData.find((d) => d.name === "Girls")?.count || 0;
  const boysPercentage = Math.round((boysCount / totalStudents) * 100);
  const girlsPercentage = Math.round((girlsCount / totalStudents) * 100);

  return (
    <div className="bg-white rounded-xl w-full h-[90%] p-4 ">
      {/* TITLE */}
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-[75%]">
        <Card className="flex flex-col border-0 shadow-none">
          <CardContent className="flex-1 pt-15 relative">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={chartData}
                startAngle={-90}
                endAngle={380}
                innerRadius={60}
                outerRadius={120}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey="name" />}
                />
                <RadialBar dataKey="count" background>
                  <LabelList
                    position="insideStart"
                    dataKey="name"
                    className="fill-white capitalize mix-blend-luminosity"
                    fontSize={11}
                  />
                </RadialBar>
              </RadialBarChart>
            </ChartContainer>
            <Image
              src="/maleFemale.png"
              alt=""
              width={50}
              height={50}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </CardContent>
        </Card>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <h1 className="font-bold">{boysCount.toLocaleString()}</h1>
          <h2 className="text-xs text-gray-300">Boys ({boysPercentage}%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <h1 className="font-bold">{girlsCount.toLocaleString()}</h1>
          <h2 className="text-xs text-gray-300">Girls ({girlsPercentage}%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
