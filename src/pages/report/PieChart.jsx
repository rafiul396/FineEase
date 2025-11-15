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

const PieChartExample = ({ updatedExpenseData, updatedIncomeData }) => {
    // Example data format:
    return (
        <div className="space-y-4">
            <div className="w-full h-[450px] bg-info text-secondary p-5 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-center">
                Expense Summary
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

        {/* Income Summary */}
        <div className="w-full h-[450px] bg-info text-secondary p-5 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-center">
                Income Summary
            </h2>
                <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                        <Pie
                            data={updatedIncomeData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            label
                        >
                            {updatedIncomeData.map((entry, index) => (
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
        </div>
    );
};

export default PieChartExample;
