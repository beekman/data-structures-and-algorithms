/* Data Explanation:
`hours: [1, 4, 3, 2, 5]` is an array of values for each hour of the day starting at hour `00:00`.  The array will be at most 24 items (for 24 hours in the day).

You can assume that the number of hours are the same for each day regardless of the event. (“2023-03-10” will have 5 items in the array for “views” AND “clicks”)

You want the data in this structure when you’re done:
Array<{date: string, views: number, clicks: number}>
------------------------
*/
const data = {
	"views": {
		"2023-03-10": {
			"hours": [1, 4, 3, 2, 5]
		},
		"2023-03-09": {
			"hours": [5, 3, 5, 4, 3, 5, 6, 9, 5, 1, 2, 8, 4, 2, 7, 5, 3, 4, 5, 3, 6, 5, 4, 4]
		}
	},
	"clicks": {
		"2023-03-10": {
			"hours": [7, 3, 5, 5, 7]
		},
		"2023-03-09": {
			"hours": [5, 3, 6, 2, 4, 6, 5, 9, 7, 4, 5, 8, 6, 4, 2, 6, 5, 3, 4, 3, 7, 5, 2, 6]
		}
	}
};

const dailyViewsAndClicks = data => {
	const result = [];
	// Iterate over each date in the views object
	for (const date in data.views) {
		// Get the hours array for this date
		const viewsHours = data.views[date].hours;
		const clicksHours = data.clicks[date].hours;

		// Calculate the total views and clicks for this date
		const viewsTotal = viewsHours.reduce((acc, curr) => acc + curr, 0);
		const clicksTotal = clicksHours.reduce((acc, curr) => acc + curr, 0);

		// Add the date, views, and clicks to the result array
		result.push({
			date: date,
			views: viewsTotal,
			clicks: clicksTotal,
		});
	}
	console.log(result);
	return result;
};

dailyViewsAndClicks(data);
