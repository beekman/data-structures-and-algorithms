/**
 * Helper function to count devices ('1's) in a single row string.
 * @param {string} row - The binary string representing a row.
 * @returns {number} The count of '1's in the row.
 */
const countDevices = (row) => {
    return row.split('1').length - 1;
};

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const result = bank.reduce(
        (acc, row) => {
            const currentDeviceCount = countDevices(row);

            if (currentDeviceCount > 0) {
                const beamsToAdd = acc.prev * currentDeviceCount;

                return {
                    total: acc.total + beamsToAdd,
                    prev: currentDeviceCount,
                };
            } else return acc;
        },
        {total: 0, prev: 0}
    );
    return result.total;
};
