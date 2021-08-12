module.exports = function (startString, finishString) {
    var start = getValue(startString);
    var finish = getValue(finishString);

    var duration = calculateMonthDiff(start, finish);

    return `${start.formatted} - ${finish.formatted} (${duration.formatted})`;
}

function getValue(date) {

    let month = null;
    let year = null;
    let formatted = null;

    if (date == "present") {
        var today = new Date();

        month = today.getMonth() + 1;
        year = today.getFullYear();
        formatted = `Present`;
    } else {
        var dateSplit = date.split("/");

        month = dateSplit[0];
        year = dateSplit[1];
        formatted = `${Months[month - 1]} ${year}`;
    }

    return {
        month: Number(month),
        year: Number(year),
        formatted: formatted
    }
}

function calculateMonthDiff(start, finish) {
    var months;
    months = (finish.year - start.year) * 12;
    months -= start.month;
    months += finish.month;
    months = months <= 0 ? 1 : months;

    return {
        value: months,
        formatted: formattedDuration(months)
    };
}

function formattedDuration(months) {
    if (months == 0) {
        return "";
    } else if (months < 12) {
        return `${months} ${prefix(months, 'mo', 'mos')}`
    } else {
        let years = Math.floor(months / 12);
        let remainder = months % 12;

        if(remainder == 0){
            return `${years} ${prefix(years, 'yr', 'yrs')}`
        } else {
            return `${years} ${prefix(years, 'yr', 'yrs')} ${remainder} ${prefix(remainder, 'mo', 'mos')}`
        }

      

        
    }
}

function prefix(number, single, multiple) {
    return `${number == 1 ? single : multiple}`
}

Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']