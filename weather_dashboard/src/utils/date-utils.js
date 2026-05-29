function getFormattedDate(value, type = "date", inMS = false) {
    
    if (value === undefined || value === null) {
        return "Invalid date";
    }

    
    value = Number(value);

   
    if (isNaN(value)) {
        return "Invalid date";
    }

   
    const timestamp = inMS ? value : value * 1000;

    const date = new Date(timestamp);

    
    if (isNaN(date.getTime())) {
        return "Invalid date";
    }

    let options = {};

    if (type === "date") {
        options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
    } else if (type === "time") {
        options = {
            hour: "numeric",
            minute: "numeric",
        };
    }

    return new Intl.DateTimeFormat("en-US", options).format(date);
}

export default getFormattedDate;
