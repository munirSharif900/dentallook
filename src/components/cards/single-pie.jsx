import { useState } from "react";
import ReactECharts from "echarts-for-react";

export default function SinglePieCard({
    title,
    data,
    centerText,
}) {

    const pieOptions = {
        tooltip: { trigger: "item" },


        graphic: centerText
            ? [
                {
                    type: "text",
                    left: "center",
                    top: "44%",
                    style: {
                        text: centerText.value,
                        fontSize: 26,
                        fontWeight: "bold",
                        fill: "#111",
                    },
                },
                {
                    type: "text",
                    left: "center",
                    top: "54%",
                    style: {
                        text: centerText.label,
                        fontSize: 13,
                        fill: "#64748B",
                    },
                },
            ]
            : [],

        legend: {
            orient: "horizontal",
            bottom: 0,
            left: "left",
            icon: "circle",
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 2,
            padding: [20, 0, 0, 0],

        },

        series: [
            {
                type: "pie",
                radius: ["55%", "75%"],
                avoidLabelOverlap: true,


                label: {
                    show: true,
                    width: 90,
                    overflow: "hidden",
                    fontSize: 12,
                    color: "#475569",
                    formatter: "{b}\n({c})",
                },

                labelLine: {
                    length: 15,
                    length2: 10,
                    smooth: true,
                },


                emphasis: {
                    scale: true,
                    scaleSize: 8,
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0,0,0,0.25)",
                    },

                    label: {
                        show: true,
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#000",
                    },

                    labelLine: {
                        show: true,
                        length: 18,
                        length2: 12,
                    },
                },

                data: data.map(i => ({
                    value: i.value,
                    name: i.name,
                })),

                color: data.map(i => i.color),
            },
        ],
    };
    return (
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold ">{title}</h2>
            </div>

            <ReactECharts
                option={pieOptions}
            />
        </div>
    );
}
