import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

// Sample colors — you can replace or expand this array
const COLORS = ["#6366F1", "#F59E0B", "#10B981", "#EF4444", "#3B82F6", "#8B5CF6"];

const PieChartExample = ({ updatedExpenseData }) => {
    // Example data format:
    return (
        <div className="w-full h-[450px] bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 text-center">
                Financial Summary
            </h2>
                <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                        <Pie
                            data={updatedExpenseData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            label
                        >
                            {updatedExpenseData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #ddd",
                            }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
        </div>
    );
};

export default PieChartExample;
